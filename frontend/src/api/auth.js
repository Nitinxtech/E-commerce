export async function signUp(data) {
  return await fetch("http://localhost:5147/api/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
    credentials: "include",
  });
}

export async function signIn(data) {
  return await fetch("http://localhost:5147/api/auth/signin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
    credentials: "include",
  });
}