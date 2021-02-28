import { useRouter } from 'next/router'

export default function Login() {

  const router = useRouter()

  const login = (e) => {
    e.preventDefault()
    router.push('/home')
  }

  return (
    <div class="container mx-auto">
      <div class="flex justify-center px-6 items-center justify-center h-screen">
				<div class="w-full xl:w-3/4 lg:w-11/12 flex border rounded-lg border-yellow-200">
					<div
            class="w-full h-auto hidden lg:block lg:w-1/2 rounded-l-lg bg-cover bg-no-repeat bg-center"
            style={{backgroundImage: `url("https://doutoresdoexcel.com.br/wp-content/uploads/2017/02/social-default-image.png")`}}
          ></div>
					<div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
            <h3 class="pt-4 text-2xl text-center">Vitinho</h3>
            <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
              <div class="mb-4">
                <label class="block mb-2 text-sm font-bold text-gray-700" for="username">
                  Login
								</label>
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Digite seu usuário"
                />
              </div>
              <div class="mb-4">
                <label class="block mb-2 text-sm font-bold text-gray-700" for="password">
                  Password
								</label>
                <input
                  class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Digite sua senha"
                />
              </div>
              <hr class="mb-6 border-t" />
              <div class="mb-6 text-center">
                <button
                  class="w-full px-4 py-2 font-bold text-white bg-yellow-400 rounded-full hover:bg-yellow-300 focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={login}
                >
                  Entrar
								</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
}