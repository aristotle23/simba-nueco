import UserEntity from "@business-logic/User";

describe("User enttity test", () => {
  it("Creates a new user", async () => {
    const param = {
      name: "Mary Doe",
      email: "marydoe@mail.com",
      password: "password!",
    };
    const response = {
      message: "User created",
    };
    const Entity = new UserEntity();
    const result = await Entity.create(param);

    expect(result.message).toBe(response.message);
  });
  it("Find user", async () => {
    const userId = 1;
    const Entity = new UserEntity();
    const user = await Entity.find(userId);
    expect(user?.id).toBe(userId);
  });
});
