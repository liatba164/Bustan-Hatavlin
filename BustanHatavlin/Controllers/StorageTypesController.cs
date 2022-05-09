#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BustanHatavlin.Models;

namespace BustanHatavlin.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StorageTypesController : ControllerBase
    {
        private readonly BustanHatavlinContext _context;

        public StorageTypesController(BustanHatavlinContext context)
        {
            _context = context;
        }

        // GET: api/StorageTypes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<StorageType>>> GetStorageTypes()
        {
            return await _context.StorageTypes.ToListAsync();
        }

        // GET: api/StorageTypes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<StorageType>> GetStorageType(int id)
        {
            var storageType = await _context.StorageTypes.FindAsync(id);

            if (storageType == null)
            {
                return NotFound();
            }

            return storageType;
        }

        // PUT: api/StorageTypes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStorageType(int id, StorageType storageType)
        {
            if (id != storageType.Id)
            {
                return BadRequest();
            }

            _context.Entry(storageType).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StorageTypeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/StorageTypes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<StorageType>> PostStorageType(StorageType storageType)
        {
            _context.StorageTypes.Add(storageType);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetStorageType", new { id = storageType.Id }, storageType);
        }

        // DELETE: api/StorageTypes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStorageType(int id)
        {
            var storageType = await _context.StorageTypes.FindAsync(id);
            if (storageType == null)
            {
                return NotFound();
            }

            _context.StorageTypes.Remove(storageType);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool StorageTypeExists(int id)
        {
            return _context.StorageTypes.Any(e => e.Id == id);
        }
    }
}
