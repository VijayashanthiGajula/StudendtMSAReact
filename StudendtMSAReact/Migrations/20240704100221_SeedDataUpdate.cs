using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace StudendtMSAReact.Migrations
{
    /// <inheritdoc />
    public partial class SeedDataUpdate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Intakes",
                columns: table => new
                {
                    IntakeId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Intakes", x => x.IntakeId);
                });

            migrationBuilder.CreateTable(
                name: "Courses",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Capacity = table.Column<int>(type: "int", nullable: false),
                    Fees = table.Column<int>(type: "int", nullable: false),
                    IntakeId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Courses", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Courses_Intakes_IntakeId",
                        column: x => x.IntakeId,
                        principalTable: "Intakes",
                        principalColumn: "IntakeId",
                        onDelete: ReferentialAction.Cascade);
                });

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

            migrationBuilder.CreateIndex(
                name: "IX_Courses_IntakeId",
                table: "Courses",
                column: "IntakeId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Courses");

            migrationBuilder.DropTable(
                name: "Intakes");
        }
    }
}
