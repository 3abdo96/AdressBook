using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class Employee
    {
        public int EmployeeId { get; set; }
        
        public string EmployeeName { get; set; }
        public string JobTitle { get; set; }
        
        public string Department { get; set; }
        public string MobileNumber { get; set; }
        public string DateOfBirth { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
        
        public string PhotoFileName { get; set; }

        public string Age { get; set; }
    }
}
