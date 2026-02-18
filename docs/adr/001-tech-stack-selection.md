## Status
Implemented

## Context
The EnvatoBirthday project requires a function to calculate the next birthday of a given person. The function should take into account the current date and the person's date of birth.

## Decision
We will use JavaScript to create a function that calculates the next birthday by comparing the current date with the person's date of birth.

```javascript
function calculateNextBirthday(birthDate) {
  const today = new Date();
  const thisYearBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());

  if (today > thisYearBirthday) {
    return new Date(today.getFullYear() + 1, birthDate.getMonth(), birthDate.getDate());
  } else {
    return thisYearBirthday;
  }
}
```

## Consequences
The `calculateNextBirthday` function will return a `Date` object representing the next birthday of the given person. This function can be used to display the next birthday on a website or send birthday notifications. It takes into account whether the person's birthday has already passed this year, and if so, it returns the birthday for the next year.