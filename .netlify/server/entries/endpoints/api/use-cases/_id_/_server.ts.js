import { json } from "@sveltejs/kit";
import { u as useCasesData } from "../../../../../chunks/use-cases-db.js";
const GET = async ({ params }) => {
  try {
    const useCase = useCasesData.find((uc) => uc.id === params.id);
    if (!useCase) {
      return json({ error: "Use case not found" }, { status: 404 });
    }
    return json(useCase);
  } catch (error) {
    console.error("Error fetching use case:", error);
    return json({ error: "Failed to fetch use case" }, { status: 500 });
  }
};
const PUT = async ({ params, request }) => {
  try {
    return json({ error: "Updating use cases is not supported in production" }, { status: 501 });
  } catch (error) {
    console.error("Error updating use case:", error);
    return json({ error: "Failed to update use case" }, { status: 500 });
  }
};
const DELETE = async ({ params }) => {
  try {
    return json({ error: "Deleting use cases is not supported in production" }, { status: 501 });
  } catch (error) {
    console.error("Error deleting use case:", error);
    return json({ error: "Failed to delete use case" }, { status: 500 });
  }
};
export {
  DELETE,
  GET,
  PUT
};
