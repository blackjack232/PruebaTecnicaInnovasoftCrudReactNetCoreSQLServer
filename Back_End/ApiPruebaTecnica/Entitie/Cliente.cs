using ApiPruebaTecnica.Entities.Atributes;

namespace ApiPruebaTecnica.Entities
{
    public class Cliente
    {
        public int Id { get; set; }
        public string Nombre { get; set; }

        public string Apellidos { get; set; }

        public string Identificacion { get; set; }

        public string TelefonoCelular { get; set; }

        public string TelefonoOtros { get; set; }

        public string Direccion { get; set; }

        public string FechaNacimiento { get; set; }

        public string FechaAfiliacion { get; set; }

        public string Sexo { get; set; }

        public string Plan { get; set; }

        public string Proceso { get; set; }

        public string Estado { get; set; }



        public ClienteStatus Status { get; set; }
    }
}
