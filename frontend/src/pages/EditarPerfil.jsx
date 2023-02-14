import AdminNav from "../components/AdminNav";

const EditarPerfil = () => {
  return (
    <>
      <AdminNav />

      <h2 className="font-black text-3xl text-center mt-10">Editar Perfil</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Mofica tu {""}
        <span className="text-indigo-600 font-bold">Infomación Aquí</span>
      </p>

      <div className="flex justify-center">
        <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5">
          <form>
            <div className="my-3">
              <label className="uppercase font-bold text-gray-600">
                Nombre
              </label>
              <input
                type="text"
                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                name="nombre"
                placeholder="Ingrese su nuevo nombre"
              />
            </div>
            <div className="my-3">
              <label className="uppercase font-bold text-gray-600">
                Sitio Web
              </label>
              <input
                type="text"
                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                name="web"
                placeholder="Ingrese su nuevo sitio web"
              />
            </div>
            <div className="my-3">
              <label className="uppercase font-bold text-gray-600">
                Teléfono
              </label>
              <input
                type="text"
                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                name="telefono"
                placeholder="Ingrese su nuevo telefono"
              />
            </div>
            <div className="my-3">
              <label className="uppercase font-bold text-gray-600">
                Correo Eléctronico
              </label>
              <input
                type="email"
                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                name="email"
                placeholder="Ingrese su nuevo correo"
              />
            </div>

            <input
              type="submit"
              value="Guardar Cambios"
              className="bg-indigo-700 px-10 py-3 font-bold text-white rounded-lg uppercase mt-5 w-full cursor-pointer"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default EditarPerfil;
