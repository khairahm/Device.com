using DevicesAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace DevicesAPI.Context
{
    public partial class DeviceDBContext :DbContext
    {
      
        public DeviceDBContext(DbContextOptions<DeviceDBContext> options) : base(options)
        {

        }

        public virtual DbSet<Device> Device { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Device>().ToTable("Device");
        }
    }
}
