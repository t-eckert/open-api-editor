import { useUserStore } from "../../hooks"

const User = () => {
  const userStore = useUserStore()
  const user = userStore.user

  return (
    <section className="bg-white p-2 rounded-xl shadow grid grid-cols-2 gap-4">
      <div>
        <div className="font-medium text-xs text-gray-800">Name</div>
        <div>{user?.name}</div>
      </div>
      <div>
        <div className="font-medium text-xs text-gray-800">Email</div>
        <div>{user?.email}</div>
      </div>
      <div>
        <div className="font-medium text-xs text-gray-800">Id</div>
        <div>{user?.id}</div>
      </div>
      <div>
        <div className="font-medium text-xs text-gray-800">User since</div>
        <div>{user?.created.toLocaleDateString()}</div>
      </div>
    </section>
  )
}

export default User
