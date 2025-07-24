import { redirect } from "@sveltejs/kit";
const load = async () => {
  throw redirect(301, "/");
};
export {
  load
};
