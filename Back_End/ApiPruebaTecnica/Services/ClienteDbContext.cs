using Microsoft.EntityFrameworkCore;
using ApiPruebaTecnica.Entities;

namespace ApiPruebaTecnica.Services
{
    public class ClienteDbContext : DbContext
    {

        public ClienteDbContext(DbContextOptions options) : base(options) { }

        public DbSet<Cliente> Cliente { get; set; }
    }
}
