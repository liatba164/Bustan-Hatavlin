﻿using System;
using System.Collections.Generic;

namespace BustanHatavlin.Models
{
    public partial class StorageType
    {
        public StorageType()
        {
            Products = new HashSet<Product>();
        }

        public int Id { get; set; }
        public string? Name { get; set; }

        public virtual ICollection<Product> Products { get; set; }
    }
}
