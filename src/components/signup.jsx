import styles from '../css/Signup.module.css';
import { useState } from "react";
import Select from "react-select";

export default function Signup() {
    const [selectedState, setSelectedState] = useState("");
// Example: One placeholder "Rep 1 (XX)" for each state
const representatives = {
    "alabama": [
        "Moore, Barry",
        "Figures, Shomari",
        "Rogers, Mike",
        "Aderholt, Robert",
        "Strong, Dale",
        "Palmer, Gary",
        "Sewell, Terri"
      ],
      "alaska": [
        "Begich, Nicholas"
      ],
      "arizona": [
        "Schweikert, David",
        "Crane, Elijah",
        "Ansari, Yassamin",
        "Stanton, Greg",
        "Biggs, Andy",
        "Ciscomani, Juan",
        "Grijalva, Raul",
        "Hamadeh, Abraham",
        "Gosar, Paul"
      ],
      "arkansas": [
        "Crawford, Eric",
        "Hill, J.",
        "Womack, Steve",
        "Westerman, Bruce"
      ],
      "california": [
        "LaMalfa, Doug",
        "Huffman, Jared",
        "Kiley, Kevin",
        "Thompson, Mike",
        "McClintock, Tom",
        "Bera, Ami",
        "Matsui, Doris",
        "Garamendi, John",
        "Harder, Josh",
        "DeSaulnier, Mark",
        "Pelosi, Nancy",
        "Simon, Lateefah",
        "Gray, Adam",
        "Swalwell, Eric",
        "Mullin, Kevin",
        "Liccardo, Sam",
        "Khanna, Ro",
        "Lofgren, Zoe",
        "Panetta, Jimmy",
        "Fong, Vince",
        "Costa, Jim",
        "Valadao, David",
        "Obernolte, Jay",
        "Carbajal, Salud",
        "Ruiz, Raul",
        "Brownley, Julia",
        "Whitesides, George",
        "Chu, Judy",
        "Rivas, Luz",
        "Friedman, Laura",
        "Cisneros, Gilbert",
        "Sherman, Brad",
        "Aguilar, Pete",
        "Gomez, Jimmy",
        "Torres, Norma",
        "Lieu, Ted",
        "Kamlager-Dove, Sydney",
        "Sanchez, Linda",
        "Takano, Mark",
        "Kim, Young",
        "Calvert, Ken",
        "Garcia, Robert",
        "Waters, Maxine",
        "Barragan, Nanette",
        "Tran, Derek",
        "Correa, J.",
        "Min, Dave",
        "Issa, Darrell",
        "Levin, Mike",
        "Peters, Scott",
        "Jacobs, Sara",
        "Vargas, Juan"
      ],
      "colorado": [
        "DeGette, Diana",
        "Neguse, Joe",
        "Hurd, Jeff",
        "Boebert, Lauren",
        "Crank, Jeff",
        "Crow, Jason",
        "Pettersen, Brittany",
        "Evans, Gabe"
      ],
      "connecticut": [
        "Larson, John",
        "Courtney, Joe",
        "DeLauro, Rosa",
        "Himes, James",
        "Hayes, Jahana"
      ],
      "delaware": [
        "McBride, Sarah"
      ],
      "florida": [
        "Vacancy",
        "Dunn, Neal",
        "Cammack, Kat",
        "Bean, Aaron",
        "Rutherford, John",
        "Vacancy",
        "Mills, Cory",
        "Haridopolos, Mike",
        "Soto, Darren",
        "Frost, Maxwell",
        "Webster, Daniel",
        "Bilirakis, Gus",
        "Luna, Anna Paulina",
        "Castor, Kathy",
        "Lee, Laurel",
        "Buchanan, Vern",
        "Steube, W.",
        "Franklin, Scott",
        "Donalds, Byron",
        "Cherfilus-McCormick, Sheila",
        "Mast, Brian",
        "Frankel, Lois",
        "Moskowitz, Jared",
        "Wilson, Frederica",
        "Wasserman Schultz, Debbie",
        "Diaz-Balart, Mario",
        "Salazar, Maria",
        "Gimenez, Carlos"
      ],
      "georgia": [
        "Carter, Earl",
        "Bishop, Sanford",
        "Jack, Brian",
        "Johnson, Henry",
        "Williams, Nikema",
        "McBath, Lucy",
        "McCormick, Richard",
        "Scott, Austin",
        "Clyde, Andrew",
        "Collins, Mike",
        "Loudermilk, Barry",
        "Allen, Rick",
        "Scott, David",
        "Greene, Marjorie"
      ],
      "hawaii": [
        "Case, Ed",
        "Tokuda, Jill"
      ],
      "idaho": [
        "Fulcher, Russ",
        "Simpson, Michael"
      ],
      "illinois": [
        "Jackson, Jonathan",
        "Kelly, Robin",
        "Ramirez, Delia",
        "Garcia, Jesus",
        "Quigley, Mike",
        "Casten, Sean",
        "Davis, Danny",
        "Krishnamoorthi, Raja",
        "Schakowsky, Janice",
        "Schneider, Bradley",
        "Foster, Bill",
        "Bost, Mike",
        "Budzinski, Nikki",
        "Underwood, Lauren",
        "Miller, Mary",
        "LaHood, Darin",
        "Sorensen, Eric"
      ],
      "indiana": [
        "Mrvan, Frank",
        "Yakym, Rudy",
        "Stutzman, Marlin",
        "Baird, James",
        "Spartz, Victoria",
        "Shreve, Jefferson",
        "Carson, Andre",
        "Messmer, Mark",
        "Houchin, Erin"
      ],
      "iowa": [
        "Miller-Meeks, Mariannette",
        "Hinson, Ashley",
        "Nunn, Zachary",
        "Feenstra, Randy"
      ],
      "kansas": [
        "Mann, Tracey",
        "Schmidt, Derek",
        "Davids, Sharice",
        "Estes, Ron"
      ],
      "kentucky": [
        "Comer, James",
        "Guthrie, Brett",
        "McGarvey, Morgan",
        "Massie, Thomas",
        "Rogers, Harold",
        "Barr, Andy"
      ],
      "louisiana": [
        "Scalise, Steve",
        "Carter, Troy",
        "Higgins, Clay",
        "Johnson, Mike",
        "Letlow, Julia",
        "Fields, Cleo"
      ],
      "maine": [
        "Pingree, Chellie",
        "Golden, Jared"
      ],
      "maryland": [
        "Harris, Andy",
        "Olszewski, Johnny",
        "Elfreth, Sarah",
        "Ivey, Glenn",
        "Hoyer, Steny",
        "McClain Delaney, April",
        "Mfume, Kweisi",
        "Raskin, Jamie"
      ],
      "massachusetts": [
        "Neal, Richard",
        "McGovern, James",
        "Trahan, Lori",
        "Auchincloss, Jake",
        "Clark, Katherine",
        "Moulton, Seth",
        "Pressley, Ayanna",
        "Lynch, Stephen",
        "Keating, William"
      ],
      "michigan": [
        "Bergman, Jack",
        "Moolenaar, John",
        "Scholten, Hillary",
        "Huizenga, Bill",
        "Walberg, Tim",
        "Dingell, Debbie",
        "Barrett, Tom",
        "McDonald Rivet, Kristen",
        "McClain, Lisa",
        "James, John",
        "Stevens, Haley",
        "Tlaib, Rashida",
        "Thanedar, Shri"
      ],
      "minnesota": [
        "Finstad, Brad",
        "Craig, Angie",
        "Morrison, Kelly",
        "McCollum, Betty",
        "Omar, Ilhan",
        "Emmer, Tom",
        "Fischbach, Michelle",
        "Stauber, Pete"
      ],
      "mississippi": [
        "Kelly, Trent",
        "Thompson, Bennie",
        "Guest, Michael",
        "Ezell, Mike"
      ],
      "missouri": [
        "Bell, Wesley",
        "Wagner, Ann",
        "Onder, Robert",
        "Alford, Mark",
        "Cleaver, Emanuel",
        "Graves, Sam",
        "Burlison, Eric",
        "Smith, Jason"
      ],
      "montana": [
        "Zinke, Ryan",
        "Downing, Troy"
      ],
      "nebraska": [
        "Flood, Mike",
        "Bacon, Don",
        "Smith, Adrian"
      ],
      "nevada": [
        "Titus, Dina",
        "Amodei, Mark",
        "Lee, Susie",
        "Horsford, Steven"
      ],
      "newhampshire": [
        "Pappas, Chris",
        "Goodlander, Maggie"
      ],
      "newjersey": [
        "Norcross, Donald",
        "Van Drew, Jefferson",
        "Conaway, Herbert",
        "Smith, Christopher",
        "Gottheimer, Josh",
        "Pallone, Frank",
        "Kean, Thomas",
        "Menendez, Robert",
        "Pou, Nellie",
        "McIver, LaMonica",
        "Sherrill, Mikie",
        "Watson Coleman, Bonnie"
      ],
      "newmexico": [
        "Stansbury, Melanie",
        "Vasquez, Gabe",
        "Leger Fernandez, Teresa"
      ],
      "newyork": [
        "LaLota, Nick",
        "Garbarino, Andrew",
        "Suozzi, Thomas R.",
        "Gillen, Laura",
        "Meeks, Gregory",
        "Meng, Grace",
        "Velazquez, Nydia",
        "Jeffries, Hakeem",
        "Clarke, Yvette",
        "Goldman, Daniel",
        "Malliotakis, Nicole",
        "Nadler, Jerrold",
        "Espaillat, Adriano",
        "Ocasio-Cortez, Alexandria",
        "Torres, Ritchie",
        "Latimer, George",
        "Lawler, Michael",
        "Ryan, Patrick",
        "Riley, Josh",
        "Tonko, Paul",
        "Stefanik, Elise",
        "Mannion, John",
        "Langworthy, Nicholas",
        "Tenney, Claudia",
        "Morelle, Joseph",
        "Kennedy, Timothy"
      ],
      "northcarolina": [
        "Davis, Donald",
        "Ross, Deborah",
        "Murphy, Gregory",
        "Foushee, Valerie",
        "Foxx, Virginia",
        "McDowell, Addison",
        "Rouzer, David",
        "Harris, Mark",
        "Hudson, Richard",
        "Harrigan, Pat",
        "Edwards, Chuck",
        "Adams, Alma",
        "Knott, Brad",
        "Moore, Tim"
      ],
      "northdakota": [
        "Fedorchak, Julie"
      ],
      "ohio": [
        "Landsman, Greg",
        "Taylor, David",
        "Beatty, Joyce",
        "Jordan, Jim",
        "Latta, Robert",
        "Rulli, Michael A.",
        "Miller, Max",
        "Davidson, Warren",
        "Kaptur, Marcy",
        "Turner, Michael",
        "Brown, Shontel",
        "Balderson, Troy",
        "Sykes, Emilia",
        "Joyce, David",
        "Carey, Mike"
      ],
      "oklahoma": [
        "Hern, Kevin",
        "Brecheen, Josh",
        "Lucas, Frank",
        "Cole, Tom",
        "Bice, Stephanie"
      ],
      "oregon": [
        "Bonamici, Suzanne",
        "Bentz, Cliff",
        "Dexter, Maxine",
        "Hoyle, Val",
        "Bynum, Janelle",
        "Salinas, Andrea"
      ],
      "pennsylvania": [
        "Fitzpatrick, Brian",
        "Boyle, Brendan",
        "Evans, Dwight",
        "Dean, Madeleine",
        "Scanlon, Mary Gay",
        "Houlahan, Chrissy",
        "Mackenzie, Ryan",
        "Bresnahan, Robert",
        "Meuser, Daniel",
        "Perry, Scott",
        "Smucker, Lloyd",
        "Lee, Summer",
        "Joyce, John",
        "Reschenthaler, Guy",
        "Thompson, Glenn",
        "Kelly, Mike",
        "Deluzio, Christopher"
      ],
      "rhodeisland": [
        "Amo, Gabe",
        "Magaziner, Seth"
      ],
      "southcarolina": [
        "Mace, Nancy",
        "Wilson, Joe",
        "Biggs, Sheri",
        "Timmons, William",
        "Norman, Ralph",
        "Clyburn, James",
        "Fry, Russell"
      ],
      "southdakota": [
        "Johnson, Dusty"
      ],
      "tennessee": [
        "Harshbarger, Diana",
        "Burchett, Tim",
        "Fleischmann, Charles",
        "DesJarlais, Scott",
        "Ogles, Andrew",
        "Rose, John",
        "Green, Mark",
        "Kustoff, David",
        "Cohen, Steve"
      ],
      "texas": [
        "Moran, Nathaniel",
        "Crenshaw, Dan",
        "Self, Keith",
        "Fallon, Pat",
        "Gooden, Lance",
        "Ellzey, Jake",
        "Fletcher, Lizzie",
        "Luttrell, Morgan",
        "Green, Al",
        "McCaul, Michael",
        "Pfluger, August",
        "Goldman, Craig",
        "Jackson, Ronny",
        "Weber, Randy",
        "De La Cruz, Monica",
        "Escobar, Veronica",
        "Sessions, Pete",
        "Turner, Sylvester",
        "Arrington, Jodey",
        "Castro, Joaquin",
        "Roy, Chip",
        "Nehls, Troy",
        "Gonzales, Tony",
        "Van Duyne, Beth",
        "Williams, Roger",
        "Gill, Brandon",
        "Cloud, Michael",
        "Cuellar, Henry",
        "Garcia, Sylvia",
        "Crockett, Jasmine",
        "Carter, John",
        "Johnson, Julie",
        "Veasey, Marc",
        "Gonzalez, Vicente",
        "Casar, Greg",
        "Babin, Brian",
        "Doggett, Lloyd",
        "Hunt, Wesley"
      ],
      "utah": [
        "Moore, Blake",
        "Maloy, Celeste",
        "Kennedy, Mike",
        "Owens, Burgess"
      ],
      "vermont": [
        "Balint, Becca"
      ],
      "virginia": [
        "Wittman, Robert",
        "Kiggans, Jennifer",
        "Scott, Robert",
        "McClellan, Jennifer",
        "McGuire, John",
        "Cline, Ben",
        "Vindman, Eugene",
        "Beyer, Donald",
        "Griffith, H.",
        "Subramanyam, Suhas",
        "Connolly, Gerald"
      ],
      "washington": [
        "DelBene, Suzan",
        "Larsen, Rick",
        "Perez, Marie",
        "Newhouse, Dan",
        "Baumgartner, Michael",
        "Randall, Emily",
        "Jayapal, Pramila",
        "Schrier, Kim",
        "Smith, Adam",
        "Strickland, Marilyn"
      ],
      "westvirginia": [
        "Miller, Carol",
        "Moore, Riley"
      ],
      "wisconsin": [
        "Steil, Bryan",
        "Pocan, Mark",
        "Van Orden, Derrick",
        "Moore, Gwen",
        "Fitzgerald, Scott",
        "Grothman, Glenn",
        "Tiffany, Thomas",
        "Wied, Tony"
      ],
      "wyoming": [
        "Hageman, Harriet"
      ]
  };
  
const states = [
    { value: "alabama", label: "Alabama" },
    { value: "alaska", label: "Alaska" },
    { value: "arizona", label: "Arizona" },
    { value: "arkansas", label: "Arkansas" },
    { value: "california", label: "California" },
    { value: "colorado", label: "Colorado" },
    { value: "connecticut", label: "Connecticut" },
    { value: "delaware", label: "Delaware" },
    { value: "florida", label: "Florida" },
    { value: "georgia", label: "Georgia" },
    { value: "hawaii", label: "Hawaii" },
    { value: "idaho", label: "Idaho" },
    { value: "illinois", label: "Illinois" },
    { value: "indiana", label: "Indiana" },
    { value: "iowa", label: "Iowa" },
    { value: "kansas", label: "Kansas" },
    { value: "kentucky", label: "Kentucky" },
    { value: "louisiana", label: "Louisiana" },
    { value: "maine", label: "Maine" },
    { value: "maryland", label: "Maryland" },
    { value: "massachusetts", label: "Massachusetts" },
    { value: "michigan", label: "Michigan" },
    { value: "minnesota", label: "Minnesota" },
    { value: "mississippi", label: "Mississippi" },
    { value: "missouri", label: "Missouri" },
    { value: "montana", label: "Montana" },
    { value: "nebraska", label: "Nebraska" },
    { value: "nevada", label: "Nevada" },
    { value: "newhampshire", label: "New Hampshire" },
    { value: "newjersey", label: "New Jersey" },
    { value: "newmexico", label: "New Mexico" },
    { value: "newyork", label: "New York" },
    { value: "northcarolina", label: "North Carolina" },
    { value: "northdakota", label: "North Dakota" },
    { value: "ohio", label: "Ohio" },
    { value: "oklahoma", label: "Oklahoma" },
    { value: "oregon", label: "Oregon" },
    { value: "pennsylvania", label: "Pennsylvania" },
    { value: "rhodeisland", label: "Rhode Island" },
    { value: "southcarolina", label: "South Carolina" },
    { value: "southdakota", label: "South Dakota" },
    { value: "tennessee", label: "Tennessee" },
    { value: "texas", label: "Texas" },
    { value: "utah", label: "Utah" },
    { value: "vermont", label: "Vermont" },
    { value: "virginia", label: "Virginia" },
    { value: "washington", label: "Washington" },
    { value: "westvirginia", label: "West Virginia" },
    { value: "wisconsin", label: "Wisconsin" },
    { value: "wyoming", label: "Wyoming" },
  ];
  

    const repsOptions =
        selectedState && representatives[selectedState.value]
            ? representatives[selectedState.value].map((rep) => ({
                  value: rep,
                  label: rep,
              }))
            : [];
    
            const customStyles = {
                menu: (provided) => ({
                    ...provided,
                    backgroundColor: "white",
                    zIndex: 9999,  // or another high value
                  }),
                control: (provided) => ({
                  ...provided,
                  backgroundColor: "white",
                  border: "1px solid #ccc",
                  minHeight: "50px",
                }),
                singleValue: (provided) => ({
                  ...provided,
                  color: "black", // White text
                }),
                placeholder: (provided) => ({
                  ...provided,
                  color: "black", // White placeholder
                }),
                dropdownIndicator: (provided) => ({
                  ...provided,
                  color: "black", // White arrow icon
                }),
                menu: (provided) => ({
                  ...provided,
                  backgroundColor: "white", // Dark background for menu
                }),
                option: (provided, state) => ({
                  ...provided,
                  backgroundColor: state.isSelected ? "white" : "white",
                  color: "black",
                  cursor: "pointer",
                }),
              };

    return (
        <div className={styles.body}>
            <div className={styles.text}>
                <p>Get in the Know</p>
                <p>
                RepReport delivers quick and accurate updates about what your politicians are voting on in DC. Regardless of party.
                </p>
            </div>
            <div className={styles.form}>
                <form
                    action="https://app.us17.list-manage.com/subscribe/post?u=4c0f3950dc0f76487d3277a17&amp;id=52679f637a&amp;f_id=0068c2e1f0"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    className="validate"
                    target="_blank"
                >
                    <div>
                        <input
                            type="email"
                            name="EMAIL"
                            id="mce-EMAIL"
                            placeholder="Email"
                            required
                            className={styles.input}
                            
                        />
                    </div>
                    <div>
                        <Select
                        name='MMERGE8'
                        options={states}
                        placeholder="Select your state"
                        onChange={setSelectedState}
                        classNamePrefix="react-select"
                        required
                        isSearchable
                        styles={customStyles}
                    />
                    </div>
                    <div>
                    <Select
                        name='MMERGE9'
                        options={repsOptions}
                        placeholder={
                            selectedState
                                ? "Select your Representative"
                                : "Select a State First"
                        }
                        isDisabled={!selectedState}
                        classNamePrefix="react-select"
                        required
                        isSearchable
                        styles={customStyles}
                    />
                </div>
                    <div>
                        <button
                            type="submit"
                            name="subscribe"
                            id="mc-embedded-subscribe"
                            className={styles.button}
                        >
                            Subscribe
                        </button>
                        <p className={styles.smallText}>
                        Don't know your Rep? Use {' '}
                            <a
                                href="https://www.house.gov/representatives/find-your-representative"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.link}
                            >
                        Congress's Rep. Finder
                            </a>.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
