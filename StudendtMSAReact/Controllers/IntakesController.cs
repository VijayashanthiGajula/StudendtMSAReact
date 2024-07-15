using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudendtMSAReact.Context;
using StudendtMSAReact.Models;
using StudendtMSAReact.Repositories.Abstract;

namespace StudendtMSAReact.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IntakesController : ControllerBase
    {
        private readonly IIntakesRepo _IntakesRepo;

        public IntakesController(IIntakesRepo IntakesRepo)
        {
            _IntakesRepo = IntakesRepo;     }

        // GET: api/Intakes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Intake>>> GetIntakes()
        {
            var Intake = await _IntakesRepo.GetAllIntakesAsync();
            return Ok(Intake);
        }

        // GET: api/Intakes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Intake>> GetIntake(int id)
        {
            var Intake = await _IntakesRepo.GetIntakeByIdAsync(id);

            if (Intake == null)
            {
                return NotFound();
            }

            return Ok(Intake);
        }
        // POST: api/Intakes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Intake>> PostIntake(Intake Intake)
        {
            await _IntakesRepo.AddIntakeAsync(Intake);
            return CreatedAtAction("GetIntake", new { id = Intake.IntakeId }, Intake);
        }

        // PUT: api/Intakes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutIntake(int id, Intake Intake)
        {
            if (id != Intake.IntakeId)
            {
                return BadRequest();
            }

            try
            {
                // var r = await _IntakesRepo.GetIntakeByIdAsync(id);
                await _IntakesRepo.UpdateIntakeAsync(Intake);
            }
            catch (DbUpdateConcurrencyException)
            {

                if (!await _IntakesRepo.IntakeExistsAsync(id))
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

        // DELETE: api/Intakes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteIntake(int id)
        {
            bool result = await _IntakesRepo.DeleteIntakeAsync(id);
            if (result == false)
            {
                return NotFound();
            }
            return NoContent();
        }
    }
}
