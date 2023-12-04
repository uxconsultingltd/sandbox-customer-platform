//tabs from youtube tut

const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active');
        })

        tabs.forEach(tab => {
            tab.classList.remove('active');
            // tab.setAttribute("aria-selected", false);
        })

        tab.classList.add('active');
        // tab.setAttribute("aria-selected", true);
        target.classList.add('active');
    })
})

        //   <ul class="breadcrumb">

        //     <li>
        //       <a href="/" title="Home">Home</a>
        //     </li>

        //     <li class="active">Company details</li>
        //   </ul>

        //   <section>

        //     <ul class="tabs" role="tablist">
        //       <li data-tab-target="#js-company-details" class="active tab" tabindex="0">Company details</li>
        //       <li data-tab-target="#js-leadership" class="tab" tabindex="0">Leadership</li>
        //     </ul>

        //     <div class="tab-content">
        //       <div id="js-company-details" class="active" data-tab-content>
        //         <section class="company-details">

        //           <h4>Your Business Account</h4>
        //           <p>Krzysztof Owczarek Ltd</p>

        //           <h4>Trading Address</h4>
        //           <p>
        //             Scottish Enterprise <br>
        //             4/1 Atrium Court <br>
        //             GLASGOW <br>

        //             G2 6HQ <br>

        //           </p>

        //           <h4>Registered Address</h4>
        //           <p>
        //             Hamilton Race Course <br>
        //             Bothwell Road <br>
        //             HAMILTON <br>
        //             Lanarkshire <br>
        //             ML3 0DW <br>

        //           </p>

        //           <h4>Contact Details</h4>
        //           <p>
        //             +44 (0) 141 587 2630 <br>

        //           </p>

        //           <div id="edit-company-details">
        //             <a href="/acedit">Edit company details</a>
        //           </div>

        //         </section>

        //       </div>

        //       <div id="js-leadership" data-tab-content>

        //         <p>Leadership markup goes here</p>
        //       </div>

        //     </div>

        //   </section>


        // CSS
// [data-tab-content]{
//   display: none;
// }

// .active[data-tab-content]{
//   display: block;
// }

// .tabs {
//   display: flex;
//   justify-content: space-around;
//   list-style-type: none;
//   margin: 0;
//   padding: 0;
//   border-bottom: 1px solid $primary;
// }

// .tab {
//   cursor: pointer;
//   padding: 5px 10px;
//   width: 100%;

//   &:hover {
//     background-color: $primary;
//     color: white;
//   }
// }

// .tab.active{
//     background-color: $primary;
//     color: white;
// }
