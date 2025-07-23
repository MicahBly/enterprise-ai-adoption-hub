import type { UseCase } from '$lib/stores/useCases';
import type { EnablementStep } from '$lib/components/EnablementPathCompact.svelte';

export function generateEnablementSteps(useCase: UseCase): EnablementStep[] {
	const steps: EnablementStep[] = [];
	
	// Parse existing enablement steps and enhance them
	useCase.enablementSteps.forEach((stepText, index) => {
		const step = parseStepText(stepText, index);
		
		// Generate detailed content based on use case context
		step.details = generateStepDetails(step, useCase, index);
		
		// Set status based on use case status
		step.status = determineStepStatus(index, useCase.status);
		
		steps.push(step);
	});
	
	return steps;
}

function parseStepText(stepText: string, index: number): EnablementStep {
	// Extract title and description from step text
	const parts = stepText.split(':');
	const title = parts[0]?.trim() || `Step ${index + 1}`;
	const description = parts.slice(1).join(':').trim() || stepText;
	
	// Estimate duration based on keywords
	const duration = estimateDuration(stepText);
	
	return {
		id: `step-${index + 1}`,
		title: title.replace(/^Step \d+\.?\s*/i, ''), // Remove "Step X" prefix if present
		description,
		duration
	};
}

function generateStepDetails(step: EnablementStep, useCase: UseCase, index: number): EnablementStep['details'] {
	const details: EnablementStep['details'] = {};
	
	// Generate objectives based on step title and use case context
	details.objectives = generateObjectives(step, useCase, index);
	
	// Generate deliverables
	details.deliverables = generateDeliverables(step, useCase, index);
	
	// Identify stakeholders
	details.stakeholders = identifyStakeholders(step, useCase, index);
	
	// Define success criteria
	details.successCriteria = generateSuccessCriteria(step, useCase, index);
	
	// Identify potential risks
	details.risks = identifyRisks(step, useCase, index);
	
	return details;
}

function generateObjectives(step: EnablementStep, useCase: UseCase, index: number): string[] {
	const objectives: string[] = [];
	const stepLower = step.title.toLowerCase();
	
	// First step - Planning & Requirements
	if (index === 0 || stepLower.includes('requirement') || stepLower.includes('planning')) {
		objectives.push('Define clear business objectives and success metrics');
		objectives.push('Identify all stakeholders and gather requirements');
		objectives.push('Document technical and resource requirements');
		if (useCase.techStackAi.length > 0) {
			objectives.push(`Evaluate ${useCase.techStackAi[0]} capabilities for the use case`);
		}
	}
	
	// Technical setup steps
	else if (stepLower.includes('setup') || stepLower.includes('infrastructure') || stepLower.includes('environment')) {
		objectives.push('Establish development and testing environments');
		objectives.push('Configure necessary infrastructure and services');
		if (useCase.techStackInfrastructure.length > 0) {
			objectives.push(`Deploy on ${useCase.techStackInfrastructure[0]} infrastructure`);
		}
		objectives.push('Ensure security and compliance requirements are met');
	}
	
	// Development/Implementation steps
	else if (stepLower.includes('develop') || stepLower.includes('implement') || stepLower.includes('build')) {
		objectives.push('Build core functionality according to specifications');
		objectives.push('Integrate with existing systems and workflows');
		objectives.push('Implement data pipelines and processing logic');
		if (useCase.techStackIntegration.length > 0) {
			objectives.push(`Complete integration with ${useCase.techStackIntegration[0]}`);
		}
	}
	
	// Testing steps
	else if (stepLower.includes('test') || stepLower.includes('validation') || stepLower.includes('pilot')) {
		objectives.push('Execute comprehensive testing strategy');
		objectives.push('Validate accuracy and performance metrics');
		objectives.push('Conduct user acceptance testing with key stakeholders');
		objectives.push('Document and resolve identified issues');
	}
	
	// Deployment steps
	else if (stepLower.includes('deploy') || stepLower.includes('rollout') || stepLower.includes('launch')) {
		objectives.push('Execute phased deployment strategy');
		objectives.push('Monitor system performance and stability');
		objectives.push('Train end users and support staff');
		objectives.push('Establish ongoing support processes');
	}
	
	// Training/Adoption steps
	else if (stepLower.includes('train') || stepLower.includes('adoption') || stepLower.includes('onboard')) {
		objectives.push('Develop comprehensive training materials');
		objectives.push('Conduct training sessions for all user groups');
		objectives.push('Create documentation and user guides');
		objectives.push('Establish feedback channels for continuous improvement');
	}
	
	// Monitoring/Optimization steps
	else if (stepLower.includes('monitor') || stepLower.includes('optimiz') || stepLower.includes('scale')) {
		objectives.push('Track KPIs and business impact metrics');
		objectives.push('Optimize performance based on usage patterns');
		objectives.push('Plan for scaling to additional use cases');
		objectives.push('Document lessons learned and best practices');
	}
	
	// Default objectives
	else {
		objectives.push(`Complete ${step.title.toLowerCase()} activities`);
		objectives.push('Document progress and key decisions');
		objectives.push('Identify and mitigate risks');
		objectives.push('Prepare for next phase of implementation');
	}
	
	return objectives.slice(0, 4); // Limit to 4 objectives
}

function generateDeliverables(step: EnablementStep, useCase: UseCase, index: number): string[] {
	const deliverables: string[] = [];
	const stepLower = step.title.toLowerCase();
	
	if (index === 0 || stepLower.includes('requirement') || stepLower.includes('planning')) {
		deliverables.push('Business Requirements Document (BRD)');
		deliverables.push('Technical Architecture Design');
		deliverables.push('Project timeline and resource plan');
		deliverables.push('Risk assessment and mitigation plan');
	} else if (stepLower.includes('setup') || stepLower.includes('infrastructure')) {
		deliverables.push('Infrastructure deployment scripts');
		deliverables.push('Environment configuration documentation');
		deliverables.push('Security and compliance checklist');
	} else if (stepLower.includes('develop') || stepLower.includes('implement')) {
		deliverables.push('Source code and deployment packages');
		deliverables.push('API documentation and integration guides');
		deliverables.push('Unit and integration test suites');
	} else if (stepLower.includes('test') || stepLower.includes('pilot')) {
		deliverables.push('Test execution reports');
		deliverables.push('Performance benchmarking results');
		deliverables.push('User feedback and issue logs');
	} else if (stepLower.includes('deploy') || stepLower.includes('launch')) {
		deliverables.push('Deployment runbooks');
		deliverables.push('Production monitoring dashboards');
		deliverables.push('Support escalation procedures');
	} else if (stepLower.includes('train') || stepLower.includes('adoption')) {
		deliverables.push('Training materials and videos');
		deliverables.push('User documentation and quick start guides');
		deliverables.push('Adoption tracking metrics');
	} else {
		deliverables.push(`${step.title} completion report`);
		deliverables.push('Updated project documentation');
		deliverables.push('Stakeholder sign-off');
	}
	
	return deliverables.slice(0, 3);
}

function identifyStakeholders(step: EnablementStep, useCase: UseCase, index: number): string[] {
	const stakeholders: string[] = [];
	const stepLower = step.title.toLowerCase();
	
	// Always include the owner
	stakeholders.push(useCase.owner);
	
	// Add division-specific stakeholders
	stakeholders.push(`${useCase.division} Leadership`);
	
	// Add role-specific stakeholders based on step
	if (stepLower.includes('requirement') || stepLower.includes('planning')) {
		stakeholders.push('Business Analysts');
		stakeholders.push('Product Management');
	} else if (stepLower.includes('technical') || stepLower.includes('develop')) {
		stakeholders.push('Engineering Team');
		stakeholders.push('Data Science Team');
		stakeholders.push('IT Architecture');
	} else if (stepLower.includes('test') || stepLower.includes('validation')) {
		stakeholders.push('QA Team');
		stakeholders.push('End User Representatives');
	} else if (stepLower.includes('deploy') || stepLower.includes('launch')) {
		stakeholders.push('DevOps Team');
		stakeholders.push('IT Operations');
	} else if (stepLower.includes('train') || stepLower.includes('adoption')) {
		stakeholders.push('Training Team');
		stakeholders.push('Change Management');
	}
	
	// Add compliance/security for certain steps
	if (stepLower.includes('security') || stepLower.includes('compliance') || index <= 1) {
		stakeholders.push('Security & Compliance Team');
	}
	
	return [...new Set(stakeholders)].slice(0, 4);
}

function generateSuccessCriteria(step: EnablementStep, useCase: UseCase, index: number): string[] {
	const criteria: string[] = [];
	const stepLower = step.title.toLowerCase();
	
	if (stepLower.includes('requirement') || stepLower.includes('planning')) {
		criteria.push('All stakeholders aligned on objectives and approach');
		criteria.push('Budget and resources approved');
		criteria.push('Technical feasibility confirmed');
	} else if (stepLower.includes('develop') || stepLower.includes('implement')) {
		criteria.push('All planned features implemented and tested');
		criteria.push('Code review completed and approved');
		criteria.push('Performance meets defined benchmarks');
	} else if (stepLower.includes('test') || stepLower.includes('pilot')) {
		criteria.push('95% test coverage achieved');
		criteria.push('All critical bugs resolved');
		criteria.push('User acceptance criteria met');
	} else if (stepLower.includes('deploy') || stepLower.includes('launch')) {
		criteria.push('Zero critical incidents during deployment');
		criteria.push('System availability meets SLA requirements');
		criteria.push('All users successfully onboarded');
	} else if (stepLower.includes('train') || stepLower.includes('adoption')) {
		criteria.push('80% of target users completed training');
		criteria.push('User satisfaction score > 4.0/5.0');
		criteria.push('Support ticket volume within expected range');
	} else {
		criteria.push(`${step.title} objectives achieved`);
		criteria.push('Stakeholder approval received');
		criteria.push('Next phase ready to begin');
	}
	
	// Add impact-specific criteria if available
	if (useCase.impact) {
		criteria.push('Progress toward stated business impact demonstrated');
	}
	
	return criteria.slice(0, 3);
}

function identifyRisks(step: EnablementStep, useCase: UseCase, index: number): string[] {
	const risks: string[] = [];
	const stepLower = step.title.toLowerCase();
	
	// Common risks across all steps
	risks.push('Resource availability constraints');
	
	// Step-specific risks
	if (stepLower.includes('requirement') || stepLower.includes('planning')) {
		risks.push('Scope creep and changing requirements');
		risks.push('Stakeholder alignment challenges');
	} else if (stepLower.includes('technical') || stepLower.includes('develop')) {
		risks.push('Technical complexity underestimated');
		risks.push('Integration challenges with existing systems');
	} else if (stepLower.includes('test') || stepLower.includes('pilot')) {
		risks.push('Performance issues under production load');
		risks.push('User acceptance delays');
	} else if (stepLower.includes('deploy') || stepLower.includes('launch')) {
		risks.push('Production environment issues');
		risks.push('Rollback procedures not adequate');
	} else if (stepLower.includes('train') || stepLower.includes('adoption')) {
		risks.push('Low user adoption rates');
		risks.push('Insufficient training resources');
	}
	
	// Technology-specific risks
	if (useCase.techStackAi.includes('Machine Learning') || useCase.techStackAi.includes('Deep Learning')) {
		risks.push('Model accuracy below expectations');
		risks.push('Data quality and availability issues');
	}
	
	return risks.slice(0, 3);
}

function estimateDuration(stepText: string): string {
	const stepLower = stepText.toLowerCase();
	
	// Look for explicit duration mentions
	if (stepLower.includes('week')) {
		const match = stepLower.match(/(\d+)\s*week/);
		if (match) return `${match[1]} week${parseInt(match[1]) > 1 ? 's' : ''}`;
	}
	if (stepLower.includes('month')) {
		const match = stepLower.match(/(\d+)\s*month/);
		if (match) return `${match[1]} month${parseInt(match[1]) > 1 ? 's' : ''}`;
	}
	if (stepLower.includes('day')) {
		const match = stepLower.match(/(\d+)\s*day/);
		if (match) return `${match[1]} day${parseInt(match[1]) > 1 ? 's' : ''}`;
	}
	
	// Estimate based on keywords
	if (stepLower.includes('planning') || stepLower.includes('requirement')) {
		return '1-2 weeks';
	} else if (stepLower.includes('setup') || stepLower.includes('infrastructure')) {
		return '1 week';
	} else if (stepLower.includes('develop') || stepLower.includes('implement')) {
		return '2-4 weeks';
	} else if (stepLower.includes('test') || stepLower.includes('validation')) {
		return '1-2 weeks';
	} else if (stepLower.includes('pilot')) {
		return '2-4 weeks';
	} else if (stepLower.includes('deploy') || stepLower.includes('rollout')) {
		return '1 week';
	} else if (stepLower.includes('train') || stepLower.includes('onboard')) {
		return '2 weeks';
	} else if (stepLower.includes('monitor') || stepLower.includes('optimize')) {
		return 'Ongoing';
	}
	
	// Default estimate
	return '1-2 weeks';
}

function determineStepStatus(index: number, useCaseStatus: string): EnablementStep['status'] {
	// Map use case status to step progress
	switch (useCaseStatus.toLowerCase()) {
		case 'production':
		case 'deployed':
		case 'completed':
			return 'completed';
			
		case 'pilot':
		case 'testing':
			// First few steps completed, current step in progress
			if (index < 3) return 'completed';
			if (index === 3) return 'in-progress';
			return 'pending';
			
		case 'development':
		case 'in development':
			// First step completed, second in progress
			if (index === 0) return 'completed';
			if (index === 1) return 'in-progress';
			return 'pending';
			
		case 'planning':
		case 'under review':
			// First step in progress
			if (index === 0) return 'in-progress';
			return 'pending';
			
		default:
			// All pending for new/submitted use cases
			return 'pending';
	}
}