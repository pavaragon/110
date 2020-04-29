using Microsoft.EntityFrameworkCore;

namespace ERP.Models
{

    /*
        Class to handle connection between DN and model classes
        ** if you modify or change anything on the models, do the folowing:
        - Create a migration:   dotnet ef migrations add ______
        - Update database:      dotnet ef database update 
    */
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options): base(options) {

        }
    
    // specify the list of models (lcasses) that you want to become  table on th DB
        public DbSet<Car> Cars {get; set;}

    }

}