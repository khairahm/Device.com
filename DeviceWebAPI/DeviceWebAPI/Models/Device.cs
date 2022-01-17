using System.ComponentModel.DataAnnotations.Schema;

namespace DevicesAPI.Models
{
    public class Device
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]

        public int ID { get; set; }
        public string Name { get; set; }
        public string Status { get; set; }

        public string DeviceType { get; set; }

        public string Usage { get; set; }
        public int Temperature { get; set; }

    }
}
