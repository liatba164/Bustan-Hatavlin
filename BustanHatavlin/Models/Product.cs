using System;
using System.Collections.Generic;

namespace BustanHatavlin.Models
{
    public partial class Product
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public int? Quantity { get; set; }
        public string? SrcImg { get; set; }
        public int IdCategory { get; set; }
        public int IdStorageType { get; set; }

        public virtual Category IdCategoryNavigation { get; set; } = null!;
        public virtual StorageType IdStorageTypeNavigation { get; set; } = null!;
    }
}
