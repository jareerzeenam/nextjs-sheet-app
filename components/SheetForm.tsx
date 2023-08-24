'use client';

import Link from 'next/link';

const SheetForm = ({
  type,
  sheet,
  setSheet,
  submitting,
  handleSubmit,
}) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Sheet</span>
      </h1>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-sans font-semibold text-base text-gray-700">
            Sheet Name
          </span>

          <input
            value={sheet.name}
            onChange={(e) =>
              setSheet({ ...sheet, name: e.target.value })
            }
            placeholder="Sheet Name"
            type="text"
            required
            className="form_input"
          />
        </label>

        <label>
          <span className="font-sans font-semibold text-base text-gray-700">
            Amount
          </span>

          <input
            value={sheet.amount}
            onChange={(e) =>
              setSheet({ ...sheet, amount: e.target.value })
            }
            placeholder="Rs."
            type="number"
            required
            className="form_input"
          />
        </label>

        <label>
          <span className="font-sans font-semibold text-base text-gray-700">
            Start Date
          </span>

          <input
            value={
              sheet.startDate
                ? new Date(sheet.startDate)
                    .toISOString()
                    .split('T')[0]
                : ''
            }
            onChange={(e) =>
              setSheet({ ...sheet, startDate: e.target.value })
            }
            placeholder="Start Date"
            type="date"
            required
            className="form_input"
          />
        </label>

        <label>
          <span className="font-sans font-semibold text-base text-gray-700">
            End Date
          </span>

          <input
            value={
              sheet.endDate
                ? new Date(sheet.endDate).toISOString().split('T')[0]
                : ''
            }
            onChange={(e) =>
              setSheet({ ...sheet, endDate: e.target.value })
            }
            placeholder="End Date"
            type="date"
            required
            className="form_input"
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-blue-700 rounded-full text-white"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default SheetForm;
