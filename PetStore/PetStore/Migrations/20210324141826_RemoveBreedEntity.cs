using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace PetStore.Migrations
{
    public partial class RemoveBreedEntity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Products_Breeds_BreedId",
                table: "Products");

            migrationBuilder.DropTable(
                name: "Breeds");

            migrationBuilder.RenameColumn(
                name: "BreedId",
                table: "Products",
                newName: "PetId");

            migrationBuilder.RenameIndex(
                name: "IX_Products_BreedId",
                table: "Products",
                newName: "IX_Products_PetId");

            migrationBuilder.AddForeignKey(
                name: "FK_Products_Pets_PetId",
                table: "Products",
                column: "PetId",
                principalTable: "Pets",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Products_Pets_PetId",
                table: "Products");

            migrationBuilder.RenameColumn(
                name: "PetId",
                table: "Products",
                newName: "BreedId");

            migrationBuilder.RenameIndex(
                name: "IX_Products_PetId",
                table: "Products",
                newName: "IX_Products_BreedId");

            migrationBuilder.CreateTable(
                name: "Breeds",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    CreatedOn = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DeletedOn = table.Column<DateTime>(type: "datetime2", nullable: true),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    ModifiedOn = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PetId = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Breeds", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Breeds_Pets_PetId",
                        column: x => x.PetId,
                        principalTable: "Pets",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Breeds_PetId",
                table: "Breeds",
                column: "PetId");

            migrationBuilder.AddForeignKey(
                name: "FK_Products_Breeds_BreedId",
                table: "Products",
                column: "BreedId",
                principalTable: "Breeds",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
