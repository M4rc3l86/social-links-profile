// app.component.ts
import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "slp-root",
  standalone: true,
  imports: [],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
}
