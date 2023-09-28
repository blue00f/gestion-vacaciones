function Login() {
  return (
    <>
      <div className="bg-gray-200 rounded py-16 px-12 m-16 flex flex-col items-center justify-center">
        <img
          className="rounded-full h-32 w-32"
          src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="user avatar"
        />
        <form method="post" className="mt-8 mb-4">
          <div className="mb-4">
            <label for="userEmail" className="sr-only">
              Nombre de usuario
            </label>
            <input
              className="border-solid border border-gray-400 rounded px-2 py-3"
              type="email"
              id="userEmail"
              placeholder="Nombre de usuario"
              required
            />
          </div>
          <div>
            <label for="userEmail" className="sr-only">
              Contraseña
            </label>
            <input
              className="border-solid border border-gray-400 rounded px-2 py-3"
              type="password"
              id="userPass"
              placeholder="Contraseña"
              required
            />
          </div>
          <div className="my-4 flex items-center">
            <input className="h-4 w-4 mr-2" type="checkbox" id="userRemember" />
            <label for="userRemember">Recuerdame</label>
          </div>
          <button
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold w-full py-3"
            type="submit">
            Sign in
          </button>
        </form>
      </div>
    </>
  )
}

export default Login
