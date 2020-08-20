using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Bussiness_Logic.Models.Products
{
    /// <summary>
    /// Clase Modelo ->Products
    /// </summary>
   
   [Serializable]
   public class Products
    {
        [Key]
        public int Codigo { get; set; }

        [Required(ErrorMessage = "* Descripción Requeridos...")]
        [StringLength(20, ErrorMessage = "No puede exceder 20 caracteres")]
        [Display(Name = "Descripción", Description = "Descripción", Prompt = "Descripción...")]

        public string Descripcion { get; set; }

        [Required(ErrorMessage = "* Valor Requerido...")]
        [RegularExpression("([0-9]+)", ErrorMessage = "* Valor Incorrecto...")]
        [Display(Name = "Valor", Description = "Valor", Prompt = "Valor...")]
        public float Valor { get; set; }

    }
}
