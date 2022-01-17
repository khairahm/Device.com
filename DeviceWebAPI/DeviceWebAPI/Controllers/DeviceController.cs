using DevicesAPI.Context;
using DevicesAPI.Models;

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace DevicesAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DeviceController : Controller
    {

        public IHostingEnvironment _hostingEnv;
     
        
        private readonly DeviceDBContext _context;
        public DeviceController(DeviceDBContext context, IHostingEnvironment hostingEnvironment)
        {
            _context = context;
            _hostingEnv = hostingEnvironment;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Device>>> GetAsync()
        {
            return Ok(await _context.Device.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<Device>>> GetByID(int id)
        {
            Device device = await _context.Device.FindAsync(id);


            if (device == null)
            {
                return NotFound();
            }
            return Ok(device);
        }

        [Route("SaveFile")]
        [HttpPost]
        public JsonResult SaveFile()
        {
            try
            {
                var httpRequest = Request.Form;
                var postedFile = httpRequest.Files[0];
                string fileName = postedFile.FileName;
                var physicalPath = _hostingEnv.ContentRootPath + "/Images/" + fileName;
                using(var stream = new FileStream(physicalPath, FileMode.Create))
                {
                    postedFile.CopyTo(stream);
                }
                return new JsonResult(fileName);    
            }catch (Exception)
            {
                return new JsonResult("nothing.png");
            }
        }


        private bool DeviceExist(int id)
        {
            return _context.Device.Any(x=>x.ID == id);
        }
    }


}
