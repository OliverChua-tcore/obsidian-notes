---
type: car
template-version: 2
<%*
// Use variables to prevent this template from showing up in backlinks and tag searches
const navigateUp   = "my-cars|🚗 Cars we've owned";
const defaultValue = "undefined";

let title = await tp.system.prompt("Full name of vehicle", tp.file.name);
-%>
title: "<% title %>"
created: <% tp.file.creation_date() %>
aliases:
  - "<% title %>"
tags:
  - cars/my-cars
navigate-up:
  - "[[<% navigateUp %>]]"
short-code:
car-name: <% title %>
car-year: "[[<% defaultValue %>]]"
car-chassis-code:
car-make: "[[<% defaultValue %>]]"
car-model: "[[<% defaultValue %>]]"
car-trim:
car-body-style: "[[<% defaultValue %>]]"
car-drivetrain: "[[<% defaultValue %>]]"
car-transmission:
  - "[[<% defaultValue %>]]"
car-vin:
car-manufacturer: "[[<% defaultValue %>]]"
start-date:
end-date:
cover-img:
cssclasses:
edit-status: new    # new | in-progress | complete
---
<%*

// Template for keeping track of the vehicles you've maintained over the years

-%>
%%
	`short-code`: an abbreviation you use to identify the vehicle (e.g., **C24**)
	`car-name`: the full name to uniquely identify the vehicle (e.g., **2024 Mazda MX-5 Miata RF Club RWD 6MT**)
	`car-year`: the model year of the vehicle (e.g., **2024**)
	`car-chassis-code`: the alphanumeric code used by the manufacturer and car enthusiasts to identify the generation of the model (e.g., **ND3**)
	`car-make`: the make of the vehicle (e.g., **Mazda**)
	`car-model`: the model of the vehicle (e.g., **MX-5 Miata RF**)
	`car-trim`: the trim level of the vehicle (e.g., **Club**)
	`car-body-style`: the body style of the vehicle (e.g., **Convertible**)
	`car-drivetrain`: the drivetrain of the vehicle (e.g., **RWD**)
	`car-transmission`: the transmission type of the vehicle, with and without the number of forward gears (e.g., **6MT**, **MT**)
	`car-vin`: the vehicle identification number (VIN) of the vehicle
	`car-manufacturer`: the manufacturer of the vehicle — may or may not be the same as `car-make` (e.g., **Mazda Motor Corporation**)
	`start-date`: the date you acquired the vehicle (bought, leased, etc.)
	`end-date`: the date you no longer had the vehicle (sold, returned, totaled, etc.)
%%
###### [[<% navigateUp %>]]
# <% title %>
Length of ownership or stewardship:: `= choice(!this.end-date, date(today) - this.start-date, this.end-date - this.start-date)`

%% _add previous ← & → next vehicles_ %%

> [!info]- Current registration — Expires
> ![[car-99-registration.pdf]]

---

## 🛣️ Mileage summary

|       | Date          | Odometer       |
| ----- | ------------- | -------------- |
| Start |               |                |
| End   |               |                |
|       |               |                |
|       | **Days**      | **Miles**      |
|       |               |                |
|       |               |                |
|       | **Miles/Day** | **Miles/Year** |
|       |               |                |

> [!note]- Mileage log
> | Date | Odometer | Days | Miles | Miles/Day | Miles/Year |
> | ---- | -------- | ---- | ----- | --------- | ---------- |
> | - | - | - | - | - | - |

---

## 🔧 Service

|                   |     |
| ----------------- | --- |
| Bolt/Stud         |     |
| Bolt/Stud Pattern |     |
| Torque lb-ft (Nm) |     |
| Socket mm         |     |
| Wheel Lock        |     |
| Tire Brand        |     |
| Tire Model        |     |
| Tire Size         |     |
| Recommended psi   |     |
| Tire Chains       |     |
| Tire 1            |     |
| Tire 2            |     |
| Tire 3            |     |
| Tire 4            |     |
| Spare             |     |

> [!todo] Service log

---

<% await tp.file.include("[[tasks-snippet]]") %>
</br>

---

<% await tp.file.include("[[notes-snippet]]") %>
