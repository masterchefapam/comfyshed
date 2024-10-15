import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";




export async function get(){
  const {getUser} = getKindeServerSession()

  const user = await getUser();

}