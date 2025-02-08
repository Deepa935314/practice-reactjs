export const Conditional = () => {
    let age = 19;



    // type -01
    // if (age < 18) {
    //     return (
    //         <>

    //             <button>not available</button>
    //         </>
    //     )

    // }

    // type-02
    // return (
    //     <>
    //         <button>{age >= 18 ? "watch now" : "not available"}</button>
    //     </>
    // )


    // type-03 : Sometimes you might very complex if conditions, for that there are some solutions

    // let canWatch = "Not Available";
    // if(age >= 18) canWatch = "Watch Now";
    // return (
    //     <>
    //         <button>{canWatch}</button>
    //     </>
    // )

    // type-04 : solution can be better it prevents cluttering of variables outside and encapsulate such logic inside a function
    
    // type-04-1: one another benefit is also that you can also pass some dynamic values as function parameter.
    const canWatch = () => {
        if(age >= 18) return "watch now";
        return "not available"
    };

    return (
        <>
            <button>{canWatch()}</button>
        </>
    );
};