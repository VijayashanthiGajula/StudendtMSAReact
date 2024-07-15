using Microsoft.EntityFrameworkCore;
using StudendtMSAReact.Context;
using StudendtMSAReact.Repositories.Abstract;
using StudendtMSAReact.Repositories.Concrete;// reffering to context file



var builder = WebApplication.CreateBuilder(args);
//Connecting t database
var connectionString = builder.Configuration.GetConnectionString("MyConnectionString");
builder.Services.AddDbContext<StudnetDBContext>(options =>
      options.UseSqlServer(connectionString ?? throw new InvalidOperationException("Connection string 'StudentContext' not found.")));

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
// Register repository with DI container
builder.Services.AddScoped<ICourseRepo, CourseRepo>();
builder.Services.AddScoped<IIntakesRepo, IntakesRepo>();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();


//app.MapCourseEndpoints();   app.MapIntakeEndpoints();



app.Run();
