import { check } from "email-sanitizer";

const email = "example@tempmail.com";
const isTemp = check(email);

if (isTemp) {
  console.log("This is a temporary email address.");
} else {
  console.log("This is a valid email address.");
}
