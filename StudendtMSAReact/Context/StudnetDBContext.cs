﻿using Microsoft.EntityFrameworkCore;// use
using Microsoft.Extensions.Configuration;
using StudendtMSAReact.Models;//Use

namespace StudendtMSAReact.Context
{
    public class StudnetDBContext:DbContext
        
    {
        public StudnetDBContext(DbContextOptions<StudnetDBContext> options)
       : base(options)
        {
        }
        //Code for bringing the entity model that we created for intakes and courses
        public DbSet<Intake> Intakes { get; set; }
        public DbSet<Course> Courses { get; set; }


    }
}
