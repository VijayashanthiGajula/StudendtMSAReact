using Microsoft.EntityFrameworkCore;
using StudendtMSAReact.Context;
using StudendtMSAReact.Repositories.Abstract;
using StudendtMSAReact.Repositories.Concrete;// reffering to context file



var builder = WebApplication.CreateBuilder(args);
var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

//Connecting t database
var connectionString = builder.Configuration.GetConnectionString("MyConnectionString");
builder.Services.AddDbContext<StudnetDBContext>(options =>
      options.UseSqlServer(connectionString ?? throw new InvalidOperationException("Connection string 'StudentContext' not found.")));
// Add CORS policy
//builder.Services.AddCors(options =>
//{
//    options.AddPolicy("AllowAllOrigins",
//        builder => builder.AllowAnyOrigin()
//                          .AllowAnyMethod()
//                          .AllowAnyHeader());
//});

//Secure access from only API-- this allows traffic only from this specific origin
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
        policy =>
        {
            policy.WithOrigins(
                    "https://black-cliff-00c5d950f.1.azurestaticapps.net",
                   "http://localhost:3000"
                )
            .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});



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
// Use CORS policy
//app.UseCors("AllowAllOrigins");
app.UseCors(MyAllowSpecificOrigins);

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();


//app.MapCourseEndpoints();   app.MapIntakeEndpoints();



app.Run();
