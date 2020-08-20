using Bussiness_Logic.Models.Products;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Data
{
    /// <summary>
    /// Conexión y migración de Datos
    /// /// </summary>
  
    public class AppDbContext: DbContext
    {

        public AppDbContext()
        {

        }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {


        }

        /// <summary>
        /// Model Products DBContext
        /// </summary>
        public DbSet<Products> Products { get; set; }

        
        /// <summary>
        /// Metodo para la icreación de Tablas de la BD
        /// </summary>
        /// <param name="modelBuilder"></param>

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Products>().ToTable("Products");;

        }

 

    }

}
