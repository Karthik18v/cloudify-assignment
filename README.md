# Table Component with Dropdowns

This project demonstrates a dynamic table component in React with two types of dropdowns: a single-select dropdown and a multi-select dropdown. Users can add new rows to the table and interact with the dropdowns in each row.

## Features

- **Dynamic Rows**: Add new rows to the table dynamically.
- **Single-Select Dropdown**: Each row contains a dropdown with unique single-select options.
- **Multi-Select Dropdown**: Each row includes a multi-select dropdown that supports adding custom options.
- **Customizable Options**: Users can add new options to the multi-select dropdown.
- **Interactive UI**: Provides a user-friendly interface with smooth interactions.

## Project Structure

The project consists of the following components:

1. **Table**: The main component that renders the table and manages state for rows.
2. **SingleSelectDropdown**: A dropdown for selecting a single option.
3. **MultiSelectDropdown**: A dropdown that allows selecting multiple options and adding new options.

## Technologies Used

- React
- JavaScript (ES6+)
- CSS for styling

## Getting Started

Follow these steps to run the project locally:

### Prerequisites

Ensure you have the following installed on your system:

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. **Clone the Repository**:
   ```bash
   git clone <repository_url>
   ```
   Replace `<repository_url>` with the URL of your GitHub repository.

2. **Navigate to the Project Directory**:
   ```bash
   cd <project-directory-name>
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

### Running the Application

1. **Start the Development Server**:
   ```bash
   npm start
   ```

2. **Open in Browser**:
   Navigate to `http://localhost:3000` in your browser to view the application.

## Usage

1. **Add New Rows**:
   Click the "+ Add New Row" button to add a new row to the table.

2. **Single-Select Dropdown**:
   - Select an option from the dropdown in the "Label 1" column.
   - Each dropdown option can be selected only once across all rows.

3. **Multi-Select Dropdown**:
   - Select multiple options from the dropdown in the "Label 2" column.
   - Add new options to the dropdown using the input field and the "+ Add" button.

## Project Components

### Table
The `Table` component manages the state of rows and dropdown options. It renders the table and integrates the `SingleSelectDropdown` and `MultiSelectDropdown` components.

### SingleSelectDropdown
A simple dropdown that allows users to select one option. It ensures options are unique across rows.

### MultiSelectDropdown
A dropdown that allows selecting multiple options and adding new options dynamically. It features an input field for adding custom options.

## Customization

You can customize the dropdown options by modifying the `options1` and `initialMultiSelectOptions` variables in the `Table` component.

## Folder Structure

```
src/
├── components/
│   ├── Table/
│   │   ├── Table.js
│   │   ├── Table.css
│   ├── SinglePageDropdown/
│   │   ├── SingleSelectDropdown.js
│   ├── MultipleDropdown/
│       ├── MultiSelectDropdown.js
│       ├── MultiSelectDropdown.css
├── App.js
├── index.js
```

## Contributing

Contributions are welcome! If you'd like to contribute:

1. Fork the repository.
2. Create a new branch for your feature/bugfix.
3. Commit your changes and push them to your branch.
4. Submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

- React documentation for guidance on building components.
- Community tutorials for inspiration on multi-select dropdown functionality.

