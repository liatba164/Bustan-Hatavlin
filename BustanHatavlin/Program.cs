using Microsoft.EntityFrameworkCore;
using BustanHatavlin.Models;
using System.Configuration;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();
builder.Services.AddDbContext<BustanHatavlinContext>(options =>
  options.UseSqlServer(builder.Configuration.GetConnectionString("BustanHatavlinDataBase")));




builder.Services.AddCors(setup =>
{
    setup.AddPolicy("AngularLocalPolicy",
                    config => { config.WithOrigins("https://localhost:44427").AllowAnyHeader().AllowAnyMethod(); });
});


var app = builder.Build();
//app.Configuration.GetConnectionString("BustanHatavlinDataBase");
//builder.Services.AddDbContext<bustan>



// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}
app.UseCors("AngularLocalPolicy");


app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.Run();
