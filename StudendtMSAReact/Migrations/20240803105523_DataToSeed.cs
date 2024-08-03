using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace StudendtMSAReact.Migrations
{
    /// <inheritdoc />
    public partial class DataToSeed : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Intakes",
                columns: new[] { "IntakeId", "Name" },
                values: new object[,]
                {
                    { 1, "Term 1" },
                    { 2, "Term 2" },
                    { 3, "Term 3" },
                    { 4, "Term 4" }
                });

            migrationBuilder.InsertData(
                table: "Courses",
                columns: new[] { "Id", "Capacity", "Fees", "IntakeId", "Name" },
                values: new object[,]
                {
                    { 1, 10, 500, 1, "Web Designs" },
                    { 2, 10, 700, 1, "Web Development" },
                    { 3, 10, 600, 1, "Mobile Development" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Courses",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Intakes",
                keyColumn: "IntakeId",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Intakes",
                keyColumn: "IntakeId",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Intakes",
                keyColumn: "IntakeId",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Intakes",
                keyColumn: "IntakeId",
                keyValue: 1);
        }
    }
}
