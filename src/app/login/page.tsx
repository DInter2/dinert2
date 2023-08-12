import { credentialsLogin } from "../actions/login";

export default function SignIn() {

  return (
    <form action={credentialsLogin}>
      <button type="submit">Add to Cart</button>
    </form>
  )
}
