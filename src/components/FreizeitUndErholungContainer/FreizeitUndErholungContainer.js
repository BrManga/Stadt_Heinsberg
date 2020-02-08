import React from "react";
import FreizeitUndErholungFilter from "../FreizeitUndErholungFilter/FreizeitUndErholungFilter";
import FreizeitUndErholungList from "../FreizeitUndErholungList/FreizeitUndErholungList";
import Loading from "../Loading/Loading";

function FreizeitUndErholung() {
  const mok = {
    loading: false,
    sorted: {
      restaurant: [
        {
          id: 1,
          name: "Ahmet Usta",
          preise: "$$",
          googlebewertungen: 4.6,
          type: "döner",
          slug: "ahmetusta",

          image:
            "https://images.unsplash.com/photo-1567807371095-0093acabcaf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },
        {
          id: 2,
          name: "La Mora",
          preise: "$$",
          googlebewertungen: 4.2,
          type: "italian",
          slug: "lamora",

          image:
            "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },
        {
          id: 3,
          name: "Rustica",
          preise: "$",
          googlebewertungen: 4,
          type: "italian",
          slug: "rustica",
          image:
            "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
          id: 4,
          name: "Arin Grill",
          preise: "$$",
          googlebewertungen: 4.2,
          type: "griechisch",
          slug: "aringrill",

          image:
            "https://images.unsplash.com/photo-1505405241694-58823de133e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },
        {
          id: 1,
          name: "Ahmet Usta",
          preise: "$$",
          googlebewertungen: 4.6,
          type: "döner",
          slug: "ahmetusta",

          image:
            "https://images.unsplash.com/photo-1567807371095-0093acabcaf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },
        {
          id: 2,
          name: "La Mora",
          preise: "$$",
          googlebewertungen: 4.2,
          type: "italian",
          slug: "lamora",

          image:
            "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },
        {
          id: 3,
          name: "Rustica",
          preise: "$",
          googlebewertungen: 4,
          type: "italian",
          slug: "rustica",
          image:
            "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
          id: 4,
          name: "Arin Grill",
          preise: "$$",
          googlebewertungen: 4.2,
          type: "griechisch",
          slug: "aringrill",

          image:
            "https://images.unsplash.com/photo-1505405241694-58823de133e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        }
      ]
    },
    freizeitunderholung: {
      restaurant: [
        {
          id: 1,
          name: "Ahmet Usta",
          preise: "$$",
          googlebewertungen: 4.6,
          type: "döner",
          slug: "ahmetusta",
          image:
            "https://images.unsplash.com/photo-1567807371095-0093acabcaf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },
        {
          id: 2,
          name: "La Mora",
          preise: "$$",
          googlebewertungen: 4.2,
          type: "italian",
          slug: "lamora",

          image:
            "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        }
      ]
    }
  };
  const { loading, sorted, freizeitunderholung } = mok;
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <FreizeitUndErholungFilter freizeitunderholung={freizeitunderholung} />
      <FreizeitUndErholungList freizeitunderholung={sorted} />
    </div>
  );
}
export default FreizeitUndErholung;
