export default function getUserId(user: any) {
  const uid = localStorage.getItem("uid");
  let userId = "";

  if (!user && !uid) {
    localStorage.setItem("uid", crypto.randomUUID());
    userId = localStorage.getItem("uid") as string;
  } else if (!user && uid) {
    userId = uid;
  } else if (user && !uid) {
    userId = user.id;
  }

  return userId;
}
