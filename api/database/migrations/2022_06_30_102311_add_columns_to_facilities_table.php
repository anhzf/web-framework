<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::table('facilities', function (Blueprint $table) {
      $table->unsignedBigInteger('room_id')->nullable();
      $table->foreign('room_id')->references('id')->on('rooms');
      $table->json('specs')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::table('facilities', function (Blueprint $table) {
      $table->dropForeign(['room_id']);
      $table->dropColumn(['specs']);
    });
  }
};
