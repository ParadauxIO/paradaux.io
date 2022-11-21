import "./BlogListItem.css"

export default function BlogListItem({ }) {
    let day = 1;
    let month = "May";
    let header = "This is an insightful heading."

    return (
        <div className="blog-list-item">
            <div className="blog-list-left">
                <div className="blog-list-date">
                    <span className="day">
                        {day}<sup className="day-suffix">{getDateDaySuffix(day)}</sup>
                    </span>
                    <span className="month">{month}</span>
                </div>
                <div className="text-sideways">
                    category
                </div>
            </div>
            <div className="blog-list-right">
                <h1>{ header }</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis neque quas tenetur dicta ut. Excepturi quasi sed tenetur quod odit,
                    ratione fuga suscipit nihil, magni quaerat, voluptate facere quae labore.

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est voluptate inventore omnis provident doloremque aperiam quia illo tempore
                    non ad. Cum, numquam explicabo quae hic aut placeat animi consequatur beatae? <a href="">Read more.</a>
                </p>
            </div>

        </div>
    )
}

function getDateDaySuffix(day) {
    if (day > 3 && day < 21) return 'th';

    switch (day % 10) {
        case 1:
            return "st";
        case 2:
            return "nd";
        case 3:
            return "rd";
        default:
            return "th";
    }
 }