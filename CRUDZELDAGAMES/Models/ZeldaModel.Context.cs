//------------------------------------------------------------------------------
// <auto-generated>
//    Este código se generó a partir de una plantilla.
//
//    Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//    Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace CRUDZELDAGAMES.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using System.Data.Objects;
    using System.Data.Objects.DataClasses;
    using System.Linq;
    
    public partial class NINTENDOGAMEEntities : DbContext
    {
        public NINTENDOGAMEEntities()
            : base("name=NINTENDOGAMEEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public DbSet<ZELDAGAMES> ZELDAGAMES { get; set; }
    
        public virtual int SP_AddZeldaGame(string nombre, Nullable<int> year, string consola)
        {
            var nombreParameter = nombre != null ?
                new ObjectParameter("Nombre", nombre) :
                new ObjectParameter("Nombre", typeof(string));
    
            var yearParameter = year.HasValue ?
                new ObjectParameter("Year", year) :
                new ObjectParameter("Year", typeof(int));
    
            var consolaParameter = consola != null ?
                new ObjectParameter("Consola", consola) :
                new ObjectParameter("Consola", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("SP_AddZeldaGame", nombreParameter, yearParameter, consolaParameter);
        }
    
        public virtual ObjectResult<SP_GetZeldaGames_Result> SP_GetZeldaGames()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<SP_GetZeldaGames_Result>("SP_GetZeldaGames");
        }
    
        public virtual int SP_UpdZeldaGame(Nullable<int> id, string nombre, Nullable<int> year, string consola, Nullable<bool> visible)
        {
            var idParameter = id.HasValue ?
                new ObjectParameter("Id", id) :
                new ObjectParameter("Id", typeof(int));
    
            var nombreParameter = nombre != null ?
                new ObjectParameter("Nombre", nombre) :
                new ObjectParameter("Nombre", typeof(string));
    
            var yearParameter = year.HasValue ?
                new ObjectParameter("Year", year) :
                new ObjectParameter("Year", typeof(int));
    
            var consolaParameter = consola != null ?
                new ObjectParameter("Consola", consola) :
                new ObjectParameter("Consola", typeof(string));
    
            var visibleParameter = visible.HasValue ?
                new ObjectParameter("Visible", visible) :
                new ObjectParameter("Visible", typeof(bool));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("SP_UpdZeldaGame", idParameter, nombreParameter, yearParameter, consolaParameter, visibleParameter);
        }
    }
}
