"use client";

import React, { useState } from "react";
import "./Budget.scss";

export default function Budget() {
    const [budget, setBudget] = useState(0);
    const [impression, setImpression] = useState(0);
    const [budgetInput, setBudgetInput] = useState(true);

    const activateBudgetInput = () => {
        setBudgetInput(true);
    }

    const activateImpactInput = () => {
        setBudgetInput(false);
    }

    return (
        <div className="budget-container">
            <div className="left-budget-div">
                <div className="left-budget-content">
                    <h1 className="left-budget-heading">Tailor Your Budget & Audience</h1>
                    <p className="left-budget-para">Reach the most impact possible with your budget on HadsUp.</p>
                </div>
            </div>

            <div className="right-budget-div">
                <div className="right-budget-calc-content">
                    <div className="budget-calc-box">
                        <div className="budget-calc-btns">
                            <button onClick={activateBudgetInput} className={`budget-btns ${budgetInput ? "active-budget-btn" : ""} left-budget-btn`}>My budget</button>
                            <button onClick={activateImpactInput} className={`budget-btns ${budgetInput ? "" : "active-budget-btn"} right-budget-btn`}>Audience Size</button>
                        </div>

                        <div className="budget-calc-input-div">
                            <div className="budget-left-input-box">
                                {
                                    budgetInput ? <p className="budget-input-heading">Your Advertising Budget 💷</p> : <p className="budget-input-heading">Impacts You would like to reach 🔥</p>
                                }

                                <div className="budget-left-input-area">
                                    {
                                        budgetInput ? <> <span className="pound-symbol">£</span>
                                            <input value={budget} onChange={(e) => setBudget(e.target.value)} type="text" placeholder="0" className="budget-left-input" /></> : <input value={impression} onChange={(e) => setImpression(e.target.value)} type="text" placeholder="0" className="budget-left-input" />
                                    }

                                </div>
                            </div>
                            <div className="budget-right-input-box">
                                {
                                    budgetInput ? <p className="budget-input-heading">Impacts you can reach 🔥</p> : <p className="budget-input-heading">Spending on HadsUps 💷</p>
                                }

                                {
                                    budgetInput ? <h2 className="right-output">{budget * 513}</h2> : <h2 className="right-output">£{Math.round((impression / 513) * 100) / 100}</h2>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
