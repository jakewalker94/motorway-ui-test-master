import { useForm } from "react-hook-form";
import { useSelector, useDispatch} from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { SpinnerCircular } from "spinners-react";
import { formStateAction } from "../actions/actionTypes/actionTypes";
import { buildSlider, isColor, isValidDate } from "../actions/formActions.jsx/formActions"; 
import "../styles/exampleForm/form.scss";

export default function ExampleForm() {
    // state vars
    const exampleFormState = useSelector((state) => state.formStateReducer);
    const dispatch = useDispatch();

    // form vars
    const {
        register,
        handleSubmit,
        formState: { errors,  },
    } = useForm({mode: "onBlur"});

    // on submit func
    const onSubmit = (data) => {
        dispatch(formStateAction("submitting"));
        setTimeout( function() {
            const inputs = document.getElementsByTagName("input");
            Array.from(inputs).forEach( function(e) {
                e.setAttribute("disabled", "true");
            });
            dispatch(formStateAction("submitted"));
        }, 5000);
    }

    return (
        <div className="form__section">
            <div className="form__container">
                <form id="form__example" onSubmit={handleSubmit(onSubmit)}>
                    {/* name */}
                    <label>Name*</label>
                    <input 
                        {...register("name", {
                            required: "Please enter your name",
                            minLength: {
                                value: 2,
                                message: "Name is too short"
                            },
                            maxLength: {
                                value: 40,
                                message: "Name is too long"
                            }
                        })}
                    />
                    {errors.name && <div className="error__message"><FontAwesomeIcon icon={faCircleExclamation} /> {errors.name?.message}</div>}
                    {/* email */}
                    <label>Email*</label>
                    <input
                        {...register("email", {
                            required: "Please enter your email",
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: "Invalid email address"
                            },
                            minLength: {
                                value: 4,
                                message: "Email is too short"
                            },
                            maxLength: {
                                value: 40,
                                message: "Email is too long"
                            }
                        })}
                        type="email"
                    />
                    {errors.email && <div className="error__message"><FontAwesomeIcon icon={faCircleExclamation} /> {errors.email?.message}</div>}
                    {/* dob */}
                    <label>Date Of Birth*</label>
                    <input
                        {...register("dateOfBirth", {
                            required: "Please enter your date of birth",
                            validate: (value) => isValidDate(value)
                        })} 
                        type="date"
                        onChange={(e) => e.target.classList.add("filled")}
                    />
                    {errors.dateOfBirth && <div className="error__message"><FontAwesomeIcon icon={faCircleExclamation} /> {errors.dateOfBirth?.message}</div>}
                    {/* favourite colour */}
                    <label>Favourite Colour (This can even be a CSS, HEX or RGB colour)*</label>
                    <input id="input__colour" type="text" 
                        {...register("favColour", { 
                            required: "Please enter your favourite colour",
                            validate: (value) => isColor(value)
                        })} 
                    />
                    {errors.favColour && <div className="error__message"><FontAwesomeIcon icon={faCircleExclamation} /> {errors.favColour?.message}</div>}
                    {/* salary */}
                    <label>Salary*</label>
                    <input id="input__slider" type="range" min="20" max="200" {...register("salary", { required: true })} />
                    <output id="input__slider_bubble" {...buildSlider()} />
                    {/* submit */}
                    <button type="submit" disabled={exampleFormState.submitState === "submitting" || exampleFormState.submitState === "submitted" ? true : false}>
                        {exampleFormState.submitState === "submitting" ? <SpinnerCircular color="ffffff" secondaryColor="rgba(0,0,0,0)" size={30} thickness={150} speed={200} /> :exampleFormState.submitState === "submitted" ? "Submitted" : "Submit"}
                    </button>
                </form>
            </div>
        </div>
    )
}