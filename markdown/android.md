name: inverse
layout: true
class: center, middle, inverse
.indexlink[[<i class="fa fa-arrow-circle-o-up"></i>](#) [<i class="fa fa-list-ul"></i>](#index) <a href="#" class="color"><i class="fa fa-tint"></i></a>]

---

name: normal
layout: true
class: left, middle
.indexlink[[<i class="fa fa-arrow-circle-o-up"></i>](#) [<i class="fa fa-list-ul"></i>](#index) <a href="#" class="color"><i class="fa fa-tint"></i></a>]

---

template:inverse
# Android Development
## As a Case Study
<a href="http://www.fe.up.pt/~arestivo">André Restivo</a>

---

template:inverse
name:index
# Index

.indexlist[
1. [Mobile Development](#mobile)
1. [Manifest](#manifest)
1. [Activity](#activity)
1. [Persisting State](#state)
1. [Layouts](#layouts)
1. [Events](#events)
1. [Lists](#lists)
1. [Screen Dimensions](#screens)
1. [Intents](#intents)
1. [Examples](#examples)
]

---

template:inverse
name:mobile
# Mobile Development

---

# Mobile Specific Issues

* Fragmentation
  * Only 0.5% on latest Android version [[1]](https://developer.android.com/about/dashboards/)
  * 24k different Android devices in 2015) 

* Limited Input Capabilities

* Limited Resources (CPU / Memory / Storage)

---

# Fragmentation

* Different OS versions

* Different screen sizes

* Different screen resolutions

* Different capabilities

---

template:inverse
name:manifest
# Manifest

---

# Manifest File

Every application must have an AndroidManifest.xml file in its root directory. 

The manifest file provides essential information about your app to the Android system, which the system must have before it can run any of the app's code.

```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest 
  xmlns:android="http://schemas.android.com/apk/res/android"
  package="com.aor.androidexample">
  <application android:allowBackup="true" android:icon="@mipmap/ic_launcher"
    android:label="@string/app_name" android:supportsRtl="true" 
    android:theme="@style/AppTheme">
    <activity android:name=".ListActivity">
      <intent-filter>
        <action android:name="android.intent.action.MAIN" />
        <category android:name="android.intent.category.LAUNCHER" />
      </intent-filter>
    </activity>
  </application>
</manifest>
```

---

template:inverse
name:activity
# Activity

---

# Activity

.pull-left[
Represents a single screen with a user interface.

Receives events as it goes through its lifecycle.

The activity lifecycle allows the developer to deal with resource management decisions by the OS.
]

.pull-right[
![](assets/android/activity.jpg)
]

---

# Application

The *Application* class represents the whole application. Normally we do not need to access it or extend it.


---

# Context

Interface to global information about an application environment.

It allows access to application-specific resources and classes, as well as up-calls for application-level operations.

![](assets/android/context.svg)

---

template:inverse
name:state
# Persisting State

---

# Saving Persistent State

Unlike desktop operating systems, the Android OS might decide that it needs more resources and kill a background running activity.

It is important to save any persistent state after the *onPause* event but before the *onStop* event. This can be done in the *onSaveInstanceState()* method.

```java
@Override
public void onSaveInstanceState(Bundle savedInstanceState) {
  savedInstanceState.putString(STATE_USERNAME, username.getText().toString());
  savedInstanceState.putString(STATE_PASSWORD, password.getText().toString());
  super.onSaveInstanceState(savedInstanceState);
}
```

The activity can also be restarted due to a configuration change (e.g. screen rotation).

---

# Retrieving Persistent State

After the application starts again we need to recover the save state. This can be done in the *onRestoreInstanceState()* method.

```java
@Override
protected void onRestoreInstanceState(Bundle savedInstanceState) {
    super.onRestoreInstanceState(savedInstanceState);
    username.setText(savedInstanceState.getString(STATE_USERNAME));
    password.setText(savedInstanceState.getString(STATE_PASSWORD));
}
```

---

template:inverse
name:layouts
# Layouts

---

# Layout

In Android, the UI layout of an Activity, or a component of an Activity, is defined in a *layout resource file*.

The layout is stored in the *res/layout* folder and its filename becomes its *id*. 

The layout is described using XML.

To assign a layout to an activity, one can use the *setContentView()* method inside the *onCreate()* method:

```java
@Override
protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(savedInstanceState);
  setContentView(R.layout.activity_list); // /res/layout/activity_list.xml
}
```

---

# Layout

The XML language is used to describe hierarchical (tree-like) information. In this way, an Android layout is also hierarchical in nature.

It starts with a single layout root that can contain other layouts and/or UI elements.

![](assets/android/layout_example.svg)

---

# Layout Types

*	**Linear** Layout - aligns all children in a single direction, vertically or horizontally.

* **Relative** Layout - displays child views in relative positions.

* **Constraint** Layout - displays child views according to a set of constraints.

*	**Table** Layout - groups views into rows and columns.

* **Absolute** Layout - specifies the exact location of its children.

* **Frame** Layout - a placeholder on screen that you can use to display a single view.

---

# Views

Views are the UI elements that draw something on the screen that the user can interact with.

**Examples**: Button, TextView, EditText, Spinner, RadioButton, CheckBox...

![](assets/android/ui-controls.png)

---

# View and ViewGroup

Layouts are in fact also views. Can you spot the [design pattern](https://sourcemaking.com/design_patterns/composite)?

![](assets/android/layout_uml.svg)

---

# Inflating Views

Views can be inflated directly from a layout resource:

```java
LayoutInflater inflater = LayoutInflater.from(getContext());
View view = inflater.inflate(R.layout.some_view, null);
```

---

# Attributes

Each of the layout elements has some attributes. Some of these are relative to the layout the element belongs to and some are relative to the element itself.

Some important attributes:

* **id** - Defines the id of this element.

* **layout_width** - Defines the width of this element. Normally *wrap_content* or *match_parent*.
* **layout_height** - Defines the height of this element.

* **layout_weight** - Allows views to fill the remaining space on the screen.

* **layout_margin** - Extra space around the element.

* **padding** - Extra space inside the element.

---

# Layout Example

.small[
```xml
<LinearLayout android:layout_width="match_parent" 
    android:layout_height="match_parent"
    android:orientation="vertical">

  <ListView
    android:id="@+id/list_people" android:layout_weight="1"
    android:layout_width="match_parent" android:layout_height="0dp">
  </ListView>

  <LinearLayout
    android:layout_width="match_parent" android:layout_height="wrap_content"
    android:orientation="horizontal">
    <EditText
      android:id="@+id/edit_name"
      android:hint="Name" android:layout_weight="1"
      android:layout_width="0dp" android:layout_height="wrap_content" />
    <EditText
      android:id="@+id/edit_email"
      android:hint="Email" android:layout_weight="1"
      android:layout_width="0dp" android:layout_height="wrap_content"/>
    <Button
      android:id="@+id/button_add_person"
      android:text="Add" android:layout_weight="1"
      android:layout_width="0dp" android:layout_height="wrap_content" />
  </LinearLayout>
</LinearLayout>
```
]

---

# Accessing Views

We can access our views in our activities using the *findViewById()* method:

```java
  mUsername = (EditText) findViewById(R.id.edit_name);
  mPassword = (EditText) findViewById(R.id.edit_email);
```

---

template:inverse
name:mobile
# Events

---

# Events

Each different view has a different set of events it can fire. To listen to these events we can use event listeners:

```java
buttonAdd.setOnClickListener(new View.OnClickListener() {
  @Override
  public void onClick(View v) {
      
  }
});
```

* Another [design pattern](https://sourcemaking.com/design_patterns/observer)?
* Why is the view passed as a parameter?

---

template:inverse
name:lists
# Lists

---

# Lists

There are two views that can be used to display lists: *ListView* and *RecyclerView*.

Both of these use a *adapters* that act as a bridge between the list and the underlying data.

![](assets/android/listview.svg)

A *RecyclerView* is a more recent and powerful form to display lists.

[Several](https://sourcemaking.com/design_patterns/factory_method) [design](https://sourcemaking.com/design_patterns/object_pool)  [patterns](https://sourcemaking.com/design_patterns/adapter)?

---

# ListView Adapter

```java
public class PersonAdapter extends ArrayAdapter<Person> {
  public PersonAdapter(Context context, List<Person> items) {
      super(context, -1, items);
  }

  @Override
  public View getView(int position, View convertView, ViewGroup parent) {
    if (convertView == null) { // Check if we are reusing a view
        LayoutInflater inflater = LayoutInflater.from(getContext());
        convertView = inflater.inflate(R.layout.item_person, null);
    }

    TextView textName = (TextView) convertView.findViewById(R.id.text_name);
    TextView textEmail = (TextView) convertView.findViewById(R.id.text_email);

    textName.setText(getItem(position).getName());
    textEmail.setText(getItem(position).getEmail());

    return convertView;
  }
}
```

---

template:inverse
name:screens
# Multiple Screen Dimensions

---

# Screen Density

The quantity of pixels within a physical area of the screen; usually referred to as dpi (dots per inch). 

Six generalized densities:

* ldpi (low) ~120dpi
* mdpi (medium) ~160dpi
* hdpi (high) ~240dpi
* xhdpi (extra-high) ~320dpi
* xxhdpi (extra-extra-high) ~480dpi
* xxxhdpi (extra-extra-extra-high) ~640dpi

---

# Orientation

The orientation of the screen from the user's point of view. This is either **landscape** or **portrait**, meaning that the screen's aspect ratio is either wide or tall, respectively.

---

# Density Independence

An application achieves *density independence* when it preserves the physical size, from the user's point of view, of user interface elements on screens with different densities.

This can be achieved in two ways:

* Using the *dp* (density-independent pixel) unit instead of *px* (pixel).
* Providing alternative bitmap resources for different densities.

---

# Density-independent Pixels

The density-independent pixel is equivalent to one physical pixel on a 160 dpi screen.

At runtime, the system transparently handles any scaling of the dp units, as necessary, based on the actual density of the screen in use. 

The conversion of dp units to screen pixels is simple: $px = dp * (dpi / 160)$

---

# Configuration Qualifiers

Android supports several configuration qualifiers that allow you to control how the system selects your alternative resources based on the characteristics of the current device screen.

To use configuration qualifiers we just have to put our resources (drawables, layouts, ...) in folders with the name: res/&lt;resources_name&gt;-&lt;qualifier&gt;.

Where *resource_name* is the type of the resource (drawable, layout) and *qualifier* is is a configuration qualifier: Size, Density, Orientation, Language... [[2]](https://developer.android.com/guide/topics/resources/providing-resources.html#AlternativeResources)

---

template:inverse
name:intents
# Intents

---

# Intent

An abstract description of an operation to be performed. 

Can be used with to launch an Activity, to send broadcasts to any interested components, to start Services and more.

The primary pieces of information in an intent are:

* action - The general action to be performed (e.g. ACTION_VIEW, ACTION_EDIT, ACTION_MAIN, ...).
* data - The data to operate expressed as a URI.

There are a number of secondary attributes that can be included in an intent: category, type, component, extras, ...

Another [design pattern](https://sourcemaking.com/design_patterns/command)?

---

# Intent Types

There are two primary forms of intents:

* Explicit Intents: have a specific component that provides the exact class to be run. 

* Implicit Intents: must include enough information for the system to determine which of the available components is best to run for that intent. 

---

# Starting an Activity

To start an activity we must use an Intent:

```java
  Intent intent = new Intent(getContext(), PersonActivity.class);
  intent.putExtra(PersonActivity.INTENT_PERSON, person);
  getContext().startActivity(intent);
```

The activity that receives the intent can read it on the *onCreate()* method:

```java
Intent intent = getIntent();
person = (Person) intent.getSerializableExtra(INTENT_PERSON);
```

Do not forget to declare the activity in the *manifest*.

---

# Intent Filters

```java
<activity android:name=".UrlActivity">
  <intent-filter>
    <action android:name="android.intent.action.VIEW" />
    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />
    <data android:host="www.person-app.com" android:scheme="http" />
  </intent-filter>
</activity>
```

---

template:inverse
name:examples
# Examples

---

Examples for these slides can be found in [this](https://github.com/arestivo/AndroidExample/) github project using several tags for important milestones:

* [helloworld](https://github.com/arestivo/AndroidExample/tree/helloworld) - Initial project setup
* [lifecycle](https://github.com/arestivo/AndroidExample/tree/lifecycle) - Showcase the Android lifecyle
* [persistency](https://github.com/arestivo/AndroidExample/tree/persistency) - Save and retrieve persistent data
* [layout](https://github.com/arestivo/AndroidExample/tree/layout) - Layouts and views
* [listview](https://github.com/arestivo/AndroidExample/tree/listview) - ListView and ArrayAdapter
* [qualifiers](https://github.com/arestivo/AndroidExample/tree/qualifiers) - Qualifiers for different screens
* [intents](https://github.com/arestivo/AndroidExample/tree/intents) - Intents, Starting activities and Intent-Filters



