import { json } from "@sveltejs/kit";
import { d as db, u as useCases } from "../../../../chunks/index2.js";
import { like, or, desc } from "drizzle-orm";
const GET = async ({ url }) => {
  try {
    const searchParams = url.searchParams;
    const division = searchParams.get("division");
    const search = searchParams.get("search");
    const status = searchParams.get("status");
    const tags = searchParams.get("tags")?.split(",").filter(Boolean);
    let query = db.select().from(useCases);
    const conditions = [];
    if (division && division !== "all") {
      conditions.push(like(useCases.division, `%${division}%`));
    }
    if (search) {
      conditions.push(
        or(
          like(useCases.title, `%${search}%`),
          like(useCases.description, `%${search}%`),
          like(useCases.impact, `%${search}%`)
        )
      );
    }
    if (status && status !== "all") {
      conditions.push(like(useCases.status, status));
    }
    if (conditions.length > 0) {
      query = query.where(...conditions);
    }
    let results = await query.orderBy(desc(useCases.updatedAt));
    if (tags && tags.length > 0) {
      results = results.filter(
        (useCase) => tags.some((tag) => useCase.tags.includes(tag))
      );
    }
    return json(results);
  } catch (error) {
    console.error("Error fetching use cases:", error);
    return json({ error: "Failed to fetch use cases" }, { status: 500 });
  }
};
const POST = async ({ request }) => {
  try {
    const data = await request.json();
    const newUseCase = await db.insert(useCases).values({
      ...data,
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    }).returning();
    return json(newUseCase[0]);
  } catch (error) {
    console.error("Error creating use case:", error);
    return json({ error: "Failed to create use case" }, { status: 500 });
  }
};
export {
  GET,
  POST
};
