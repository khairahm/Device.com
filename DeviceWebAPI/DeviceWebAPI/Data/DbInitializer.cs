using DevicesAPI.Context;
using DevicesAPI.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace DevicesAPI.Data
{
    public class DbInitializer
    {

        public static void Initialize(DeviceDBContext context)
        {
            context.Database.Migrate();
            if (context.Device.Any())
            {
                return; //db has been seeded
            }

            var devices = new Device[]
            {
                new Device{Name = "Device 1", Status = "Availible", DeviceType = "Mobile"},
                new Device{Name = "Device 2", Status = "Offline", DeviceType = "Tablet"},
                new Device{Name = "Device 3", Status = "Availible", DeviceType = "Computer"},
                new Device{Name = "Device 4", Status = "Availible", DeviceType = "Mobile"}
            };

            foreach (Device device in devices)
            {
                context.Device.Add(device);
            }
            context.SaveChanges();
        }
    }
}
