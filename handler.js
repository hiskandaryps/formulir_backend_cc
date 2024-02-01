// handler.js
const supabase = require("./connection");

function response(status, data, message, res) {
    res.status(status).json({ status, data, message });
}

async function getFormulir(req, res) {
    try {
        let { data: students, error } = await supabase
            .from('students')
            .select('*')
            .order('id', { ascending: true });
        
        if (error) {
            response(500, null, "Internal Server Error", res);
        } else {
            if (students.length === 0) {
                response(404, null, "No data found", res);
            } else {
                response(200, students, "Data fetched successfully", res);
            }
        }
    } catch (error) {
        response(500, null, "Internal Server Error", res);
    }
}

async function getFormulirById(req, res) {
    const { student_id } = req.params;

    try {
        let { data: student, error } = await supabase
            .from('students')
            .select('*')
            .eq('student_id', student_id)
            .single();
        
        if (error) {
            console.error('Error executing query', error);
            response(500, null, "Internal Server Error", res);
        } else {
            if (!student) {
                response(404, null, "Student not found", res);
            } else {
                response(200, student, "Student data fetched successfully", res);
            }
        }
    } catch (error) {
        console.error('Error executing query', error);
        response(500, null, "Internal Server Error", res);
    }
}

async function postFormulir(req, res) {
    const { name, student_id, student_class } = req.body;

    try {
        // Insert data into the "students" table
        let { error } = await supabase
            .from('students')
            .insert([
                { name, student_id, student_class }
            ]);

        if (error) {
            console.error('Error executing query', error);
            response(500, null, "Internal Server Error", res);
        } else {
            // Fetch the inserted data
            let { data: insertedData, error: fetchError } = await supabase
                .from('students')
                .select('*')
                .eq('student_id', student_id) // Assuming student_id is unique

            if (fetchError) {
                console.error('Error fetching inserted data', fetchError);
                response(500, null, "Internal Server Error", res);
            } else {
                // If data was inserted successfully, return it in the response
                response(201, insertedData[0], "Student data inserted successfully", res);
            }
        }
    } catch (error) {
        console.error('Error executing query', error);
        response(500, null, "Internal Server Error", res);
    }
}

async function updateFormulirById(req, res) {
    const { student_id } = req.params;
    const { name, student_id: newStudentId, student_class } = req.body;

    try {
        // Update data in the "students" table
        let { data, error } = await supabase
            .from('students')
            .update({
                name,
                student_id: newStudentId,
                student_class,
                updated_at: new Date().toISOString() // Update the updated_at field
            })
            .eq('student_id', student_id);

        if (error) {
            console.error('Error executing query', error);
            response(500, null, "Internal Server Error", res);
        } else {
            let { data: updatedData, error: fetchError } = await supabase
                .from('students')
                .select('*')
                .eq('student_id', newStudentId) // Assuming student_id is unique

            if (fetchError) {
                console.error('Error fetching updated data', fetchError);
                response(500, null, "Internal Server Error", res);
            } else {
                // If data was inserted successfully, return it in the response
                response(201, updatedData[0], "Student data updated successfully", res);
            }
        }
    } catch (error) {
        console.error('Error executing query', error);
        response(500, null, "Internal Server Error", res);
    }
}

async function deleteFormulirById(req, res) {
    const { student_id } = req.params;

    try {
        // Fetch data of the student to be deleted
        let { data: deletedData, error: fetchError } = await supabase
            .from('students')
            .select('*')
            .eq('student_id', student_id);

        if (fetchError) {
            console.error('Error fetching student data to be deleted', fetchError);
            response(500, null, "Internal Server Error", res);
            return;
        }

        // Delete data from the "students" table
        let { error } = await supabase
            .from('students')
            .delete()
            .eq('student_id', student_id);

        if (error) {
            console.error('Error executing delete query', error);
            response(500, null, "Internal Server Error", res);
        } else {
            if (deletedData && deletedData.length > 0) {
                response(200, deletedData[0], "Student data deleted successfully", res);
            } else {
                response(404, null, "Student not found", res);
            }
        }
    } catch (error) {
        console.error('Error executing query', error);
        response(500, null, "Internal Server Error", res);
    }
}

module.exports = { getFormulir, getFormulirById, postFormulir, updateFormulirById, deleteFormulirById };
