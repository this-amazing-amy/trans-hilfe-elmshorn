<script lang="ts">
  import { CalendarView } from "fluent-svelte";
  import {nextGroupDates} from "../utils/date.js";

  const dates = nextGroupDates()
</script>

<CalendarView multiple value={nextGroupDates()} />