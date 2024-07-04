using System.Text.Json.Serialization;

namespace StudendtMSAReact.Models
{
    
 

        public class Intake
        {
            public int IntakeId { get; set; }
            public string Name { get; set; }

        // Navigation property for the related Courses
        [JsonIgnore]
        public virtual List<Course>? Courses { get; set; }
        }



    
}
