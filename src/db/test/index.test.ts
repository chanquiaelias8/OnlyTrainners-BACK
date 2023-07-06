import { db } from "../db";
import { Sex, User } from "../models/usurios";

/*User.sync({ force: false }).then(() => {
    const user = User.build({
      idUsuario: 1,
      firstname: "John",
      lastName: "Doe",
      email: "johndoe@example.com",
      password: "password",
      Birthdate: new Date(),
      nationality: "USA",
      sex: Sex.male,
    });
    console.log(user.toJSON()); // 1
  });*/

db.sync({ force: false }).then(async() => {
    const user = await User.create({
      firstname: "John",
      lastName: "Doe",
      email: "johndoe@example.com",
      password: "password",
      Birthdate: new Date(),
      sex: Sex.male,
    })
    console.log(user.toJSON())
    user.firstname="juanito alimaña"
    await user.save()
    console.log(user.toJSON())
})
