<script setup>
import { ref, computed } from "vue";
import BaseTable from "@/components/Table/BaseTable.vue";
import TableRow from "@/components/Table/TableRow.vue";
import TableColumn from "@/components/Table/TableColumn.vue";
import Button from "@/components/Button.vue";

const tableHeads = ["Id", "Author", "Title", "Cover", ""];

const sizeColumns = "50px 1fr 2fr 140px 150px";

const books = ref([
  {
    id: 1,
    author: "Dmitry Glukhovsky",
    title: "Metro 2033",
    image:
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81pNKLAG-cL._AC_UY436_FMwebp_QL65_.jpg",
    bg: "#FFA26B",
  },
  {
    id: 12,
    author: "James Clear",
    title: "Atomic Habits: An Easy",
    image: "https://m.media-amazon.com/images/P/0735211299.01._SCLZZZZZZZ_SX500_.jpg",
    bg: "#00C48C",
  },
  {
    id: 2,
    author: "J. K. Rowling",
    title: "Harry Potter and the Order of the Phoenix",
    image:
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51bZujlJxlL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
    bg: "#00C48C",
  },
]);
</script>

<template>
  <h2 class="heading-1">Table</h2>
  <BaseTable :head="tableHeads" :columnTemplates="sizeColumns">
    <table-row
      v-for="book in books"
      :key="book.id"
      :columnTemplates="sizeColumns"
      :bgRow="book.bg"
    >
      <table-column :columnTitle="tableHeads[0]">
        {{ book.id }}
      </table-column>

      <table-column :columnTitle="tableHeads[1]">
        {{ book.author }}
      </table-column>

      <table-column :columnTitle="tableHeads[2]">
        {{ book.title }}
      </table-column>

      <TableColumn :image="true" :srcImage="book.image"> </TableColumn>

      <table-column>
        <Button lavel="Read Online"></Button>
      </table-column>
    </table-row>
  </BaseTable>
</template>

<style lang="scss" scoped></style>
